/* Rocket whoosh shared by the intro and the network band. */

let audio: AudioContext | null = null;

/* Small rocket launch for a visitor's click: a roar of filtered air that
   sweeps upward with a thin rising liftoff tone. Low frequencies are cut so
   the sound stays clean. Runs inside the click, so browsers allow it. */
export function playRocket(pitch = 1) {
  try {
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    audio = audio || new AC();
    if (audio.state === "suspended") void audio.resume();
    const ctx = audio;
    const t = ctx.currentTime + 0.005;
    const end = t + 0.7;

    const out = ctx.createGain();
    out.gain.setValueAtTime(0.0001, t);
    out.gain.exponentialRampToValueAtTime(0.16, t + 0.06);
    out.gain.setValueAtTime(0.16, t + 0.25);
    out.gain.exponentialRampToValueAtTime(0.0001, end);
    out.connect(ctx.destination);

    // Roar: softened noise, high-passed to drop the rumble, low-passed with an upward sweep.
    const len = Math.floor(ctx.sampleRate * 0.75);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + 0.08 * (Math.random() * 2 - 1)) / 1.08;
      data[i] = last * 3.2;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    const high = ctx.createBiquadFilter();
    high.type = "highpass";
    high.frequency.value = 180;
    const low = ctx.createBiquadFilter();
    low.type = "lowpass";
    low.Q.value = 1.2;
    low.frequency.setValueAtTime(500, t);
    low.frequency.exponentialRampToValueAtTime(3200 * pitch, t + 0.32);
    low.frequency.exponentialRampToValueAtTime(1400, end);
    noise.connect(high);
    high.connect(low);
    low.connect(out);

    // Liftoff tone: a thin sine that climbs as the roar rises.
    const tone = ctx.createOscillator();
    tone.type = "sine";
    tone.frequency.setValueAtTime(320 * pitch, t);
    tone.frequency.exponentialRampToValueAtTime(1500 * pitch, t + 0.55);
    const tg = ctx.createGain();
    tg.gain.setValueAtTime(0.0001, t);
    tg.gain.exponentialRampToValueAtTime(0.05, t + 0.12);
    tg.gain.exponentialRampToValueAtTime(0.0001, end);
    tone.connect(tg);
    tg.connect(out);

    noise.start(t);
    noise.stop(end);
    tone.start(t);
    tone.stop(end + 0.02);
  } catch {
    /* sound is optional */
  }
}
