export const timeCatMini = `stack(
  'c3@3 [eb3, g3, [c4 d4]/2]'.mini,
  'c2 g2'.mini,
  '[eb4@5 [f4 eb4 d4]@3] [eb4 c4]/2'.mini.slow(8)
)`;
export const timeCat = `stack(
  timeCat([3, c3], [1, stack(eb3, g3, m(c4, d4).slow(2))]),
  m(c2, g2),
  sequence(
    timeCat([5, eb4], [3, m(f4, eb4, d4)]), 
    m(eb4, c4).slow(2)
  ).slow(4)
)`;
export const shapeShifted = `stack(
  sequence(
    e5, [b4, c5], d5, [c5, b4],
    a4, [a4, c5], e5, [d5, c5],
    b4, [r, c5], d5, e5,
    c5, a4, a4, r,
    [r, d5], [r, f5], a5, [g5, f5],
    e5, [r, c5], e5, [d5, c5],
    b4, [b4, c5], d5, e5,
    c5, a4, a4, r,
  ).rev(),
  sequence(
    e2, e3, e2, e3, e2, e3, e2, e3,
    a2, a3, a2, a3, a2, a3, a2, a3,
    gs2, gs3, gs2, gs3, e2, e3, e2, e3,
    a2, a3, a2, a3, a2, a3, b1, c2,
    d2, d3, d2, d3, d2, d3, d2, d3,
    c2, c3, c2, c3, c2, c3, c2, c3,
    b1, b2, b1, b2, e2, e3, e2, e3,
    a1, a2, a1, a2, a1, a2, a1, a2,
  ).rev()
).slow(16)`;
export const tetrisWithFunctions = `stack(sequence(
  'e5', sequence('b4', 'c5'), 'd5', sequence('c5', 'b4'),
  'a4', sequence('a4', 'c5'), 'e5', sequence('d5', 'c5'),
  'b4', sequence(silence, 'c5'), 'd5', 'e5',
  'c5', 'a4', 'a4', silence,
  sequence(silence, 'd5'), sequence(silence, 'f5'), 'a5', sequence('g5', 'f5'),
  'e5', sequence(silence, 'c5'), 'e5', sequence('d5', 'c5'),
  'b4', sequence('b4', 'c5'), 'd5', 'e5',
  'c5', 'a4', 'a4', silence),
  sequence(
    'e2', 'e3', 'e2', 'e3', 'e2', 'e3', 'e2', 'e3',
    'a2', 'a3', 'a2', 'a3', 'a2', 'a3', 'a2', 'a3',
    'g#2', 'g#3', 'g#2', 'g#3', 'e2', 'e3', 'e2', 'e3',
    'a2', 'a3', 'a2', 'a3', 'a2', 'a3', 'b1', 'c2',
    'd2', 'd3', 'd2', 'd3', 'd2', 'd3', 'd2', 'd3',
    'c2', 'c3', 'c2', 'c3', 'c2', 'c3', 'c2', 'c3',
    'b1', 'b2', 'b1', 'b2', 'e2', 'e3', 'e2', 'e3',
    'a1', 'a2', 'a1', 'a2', 'a1', 'a2', 'a1', 'a2',
  )
).slow(16)`;
export const tetris = `stack(
    mini(
      'e5 [b4 c5] d5 [c5 b4]',
      'a4 [a4 c5] e5 [d5 c5]',
      'b4 [~ c5] d5 e5',
      'c5 a4 a4 ~',
      '[~ d5] [~ f5] a5 [g5 f5]',
      'e5 [~ c5] e5 [d5 c5]',
      'b4 [b4 c5] d5 e5',
      'c5 a4 a4 ~'
    ),
    mini(
      'e2 e3 e2 e3 e2 e3 e2 e3',
      'a2 a3 a2 a3 a2 a3 a2 a3',
      'g#2 g#3 g#2 g#3 e2 e3 e2 e3',
      'a2 a3 a2 a3 a2 a3 b1 c2',
      'd2 d3 d2 d3 d2 d3 d2 d3',
      'c2 c3 c2 c3 c2 c3 c2 c3',
      'b1 b2 b1 b2 e2 e3 e2 e3',
      'a1 a2 a1 a2 a1 a2 a1 a2'
  )
).slow(16)`;
export const tetrisRev = `stack(
    mini(
      'e5 [b4 c5] d5 [c5 b4]',
      'a4 [a4 c5] e5 [d5 c5]',
      'b4 [~ c5] d5 e5',
      'c5 a4 a4 ~',
      '[~ d5] [~ f5] a5 [g5 f5]',
      'e5 [~ c5] e5 [d5 c5]',
      'b4 [b4 c5] d5 e5',
      'c5 a4 a4 ~'
    ).rev(),
    mini(
      'e2 e3 e2 e3 e2 e3 e2 e3',
      'a2 a3 a2 a3 a2 a3 a2 a3',
      'g#2 g#3 g#2 g#3 e2 e3 e2 e3',
      'a2 a3 a2 a3 a2 a3 b1 c2',
      'd2 d3 d2 d3 d2 d3 d2 d3',
      'c2 c3 c2 c3 c2 c3 c2 c3',
      'b1 b2 b1 b2 e2 e3 e2 e3',
      'a1 a2 a1 a2 a1 a2 a1 a2'
    ).rev()
).slow(16)`;
export const tetrisMini = `\`[[e5 [b4 c5] d5 [c5 b4]]
[a4 [a4 c5] e5 [d5 c5]]
[b4 [~ c5] d5 e5]
[c5 a4 a4 ~]
[[~ d5] [~ f5] a5 [g5 f5]]
[e5 [~ c5] e5 [d5 c5]]
[b4 [b4 c5] d5 e5]
[c5 a4 a4 ~]],
[[e2 e3]*4]
[[a2 a3]*4]
[[g#2 g#3]*2 [e2 e3]*2]
[a2 a3 a2 a3 a2 a3 b1 c2]
[[d2 d3]*4]
[[c2 c3]*4]
[[b1 b2]*2 [e2 e3]*2]
[[a1 a2]*4]\`.mini.slow(16)
`;
export const spanish = `slowcat(
 stack(c4,eb4,g4),
 stack(bb3,d4,f4),
 stack(ab3,c4,eb4),
 stack(g3,b3,d4)
)`;
export const whirlyStrudel = `mini("[e4 [b2  b3] c4]")
.every(4, fast(2))
.every(3, slow(1.5))
.fast(slowcat(1.25, 1, 1.5))
.every(2, _ => mini("e4 ~ e3 d4 ~"))`;
export const swimming = `stack(
  mini(
    '~',
    '~',
    '~',
    'A5 [F5@2 C5] [D5@2 F5] F5',
    '[C5@2 F5] [F5@2 C6] A5 G5',
    'A5 [F5@2 C5] [D5@2 F5] F5',
    '[C5@2 F5] [Bb5 A5 G5] F5@2',
    'A5 [F5@2 C5] [D5@2 F5] F5',
    '[C5@2 F5] [F5@2 C6] A5 G5',
    'A5 [F5@2 C5] [D5@2 F5] F5',
    '[C5@2 F5] [Bb5 A5 G5] F5@2',
    'A5 [F5@2 C5] A5 F5',
    'Ab5 [F5@2 Ab5] G5@2',
    'A5 [F5@2 C5] A5 F5',
    'Ab5 [F5@2 C5] C6@2',
    'A5 [F5@2 C5] [D5@2 F5] F5',
    '[C5@2 F5] [Bb5 A5 G5] F5@2'
  ),
  mini(
    '[F4,Bb4,D5] [[D4,G4,Bb4]@2 [Bb3,D4,F4]] [[G3,C4,E4]@2 [[Ab3,F4] [A3,Gb4]]] [Bb3,E4,G4]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, Bb3, Db3] [F3, Bb3, Db3]]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [A3, C4, E4] [A3, C4, E4]] [~ [Ab3, C4, Eb4] [Ab3, C4, Eb4]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [G3, C4, E4] [G3, C4, E4]]',
    '[~ [F3, A3, C4] [F3, A3, C4]] [~ [F3, A3, C4] [F3, A3, C4]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [F3, Bb3, D4] [F3, Bb3, D4]] [~ [F3, Bb3, C4] [F3, Bb3, C4]] [~ [F3, A3, C4] [F3, A3, C4]] [~ [F3, A3, C4] [F3, A3, C4]]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [A3, C4, E4] [A3, C4, E4]] [~ [Ab3, C4, Eb4] [Ab3, C4, Eb4]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [G3, C4, E4] [G3, C4, E4]]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [F3, Bb3, D4] [F3, Bb3, D4]] [~ [F3, Bb3, C4] [F3, Bb3, C4]] [~ [F3, A3, C4] [F3, A3, C4]] [~ [F3, A3, C4] [F3, A3, C4]]',
    '[~ [Bb3, D3, F4] [Bb3, D3, F4]] [~ [Bb3, D3, F4] [Bb3, D3, F4]] [~ [A3, C4, F4] [A3, C4, F4]] [~ [A3, C4, F4] [A3, C4, F4]]',
    '[~ [Ab3, B3, F4] [Ab3, B3, F4]] [~ [Ab3, B3, F4] [Ab3, B3, F4]] [~ [G3, Bb3, F4] [G3, Bb3, F4]] [~ [G3, Bb3, E4] [G3, Bb3, E4]]',
    '[~ [Bb3, D3, F4] [Bb3, D3, F4]] [~ [Bb3, D3, F4] [Bb3, D3, F4]] [~ [A3, C4, F4] [A3, C4, F4]] [~ [A3, C4, F4] [A3, C4, F4]]',
    '[~ [Ab3, B3, F4] [Ab3, B3, F4]] [~ [Ab3, B3, F4] [Ab3, B3, F4]] [~ [G3, Bb3, F4] [G3, Bb3, F4]] [~ [G3, Bb3, E4] [G3, Bb3, E4]]',
    '[~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, A3, C3] [F3, A3, C3]] [~ [F3, Bb3, D3] [F3, Bb3, D3]] [~ [F3, B3, D3] [F3, B3, D3]]',
    '[~ [F3, Bb3, D4] [F3, Bb3, D4]] [~ [F3, Bb3, C4] [F3, Bb3, C4]] [~ [F3, A3, C4] [F3, A3, C4]] [~ [F3, A3, C4] [F3, A3, C4]]'
  ),
  mini(
    '[G3 G3 C3 E3]',
    '[F2 D2 G2 C2]',
    '[F2 D2 G2 C2]',
    '[F2 A2 Bb2 B2]',
    '[A2 Ab2 G2 C2]',
    '[F2 A2 Bb2 B2]',
    '[G2 C2 F2 F2]',
    '[F2 A2 Bb2 B2]',
    '[A2 Ab2 G2 C2]',
    '[F2 A2 Bb2 B2]',
    '[G2 C2 F2 F2]',
    '[Bb2 Bb2 A2 A2]',
    '[Ab2 Ab2 G2 [C2 D2 E2]]',
    '[Bb2 Bb2 A2 A2]',
    '[Ab2 Ab2 G2 [C2 D2 E2]]',
    '[F2 A2 Bb2 B2]',
    '[G2 C2 F2 F2]'
  )
).slow(51);
`;
export const giantSteps = `stack(
  // melody
  mini(
    '[F#5 D5] [B4 G4] Bb4 [B4 A4]',
    '[D5 Bb4] [G4 Eb4] F#4 [G4 F4]',
    'Bb4 [B4 A4] D5 [D#5 C#5]',
    'F#5 [G5 F5] Bb5 [F#5 F#5]',
  ),
  // chords
  mini(
    '[B^7 D7] [G^7 Bb7] Eb^7 [Am7 D7]',
    '[G^7 Bb7] [Eb^7 F#7] B^7 [Fm7 Bb7]',
    'Eb^7 [Am7 D7] G^7 [C#m7 F#7]',
    'B^7 [Fm7 Bb7] Eb^7 [C#m7 F#7]'
  ).voicings(['E3', 'G4']),
  // bass
  mini(
    '[B2 D2] [G2 Bb2] [Eb2 Bb3] [A2 D2]',
    '[G2 Bb2] [Eb2 F#2] [B2 F#2] [F2 Bb2]',
    '[Eb2 Bb2] [A2 D2] [G2 D2] [C#2 F#2]',
    '[B2 F#2] [F2 Bb2] [Eb2 Bb3] [C#2 F#2]'
  )
).slow(20);`;
export const giantStepsReggae = `stack(
  // melody
  mini(
    '[F#5 D5] [B4 G4] Bb4 [B4 A4]',
    '[D5 Bb4] [G4 Eb4] F#4 [G4 F4]',
    'Bb4 [B4 A4] D5 [D#5 C#5]',
    'F#5 [G5 F5] Bb5 [F#5 [F#5 ~@3]]',
  ),
  // chords
  mini(
    '[B^7 D7] [G^7 Bb7] Eb^7 [Am7 D7]',
    '[G^7 Bb7] [Eb^7 F#7] B^7 [Fm7 Bb7]',
    'Eb^7 [Am7 D7] G^7 [C#m7 F#7]',
    'B^7 [Fm7 Bb7] Eb^7 [C#m7 F#7]'
  )
  .groove('~ [x ~]'.m.fast(4*8))
  .voicings(['E3', 'G4']),
  // bass
  mini(
    '[B2 D2] [G2 D2] [Eb2 Bb2] [A2 D2]',
    '[G2 Bb2] [Eb2 F#2] [B2 F#2] [F2 Bb2]',
    '[Eb2 Bb2] [A2 D2] [G2 D2] [C#2 F#2]',
    '[B2 F#2] [F2 Bb2] [Eb2 Bb2] [C#2 F#2]'
  )
  .groove('x ~'.m.fast(4*8))
).slow(25)`;
export const transposedChordsHacked = `stack(
  'c2 eb2 g2'.mini,
  'Cm7'.pure.voicings(['g2','c4']).slow(2)
).transpose(
  slowcat(1, 2, 3, 2).slow(2)
).transpose(5)`;
export const scaleTranspose = `stack(f2, f3, c4, ab4)
.scale(sequence('F minor', 'F harmonic minor').slow(4))
.scaleTranspose(sequence(0, -1, -2, -3).slow(4))
.transpose(sequence(0, 1).slow(16))`;
export const groove = `stack(
  'c2 g2 a2 [e2@2 eb2] d2 a2 g2 [d2 ~ db2]'.mini,
  '[C^7 A7] [Dm7 G7]'.mini.groove('[x@2 x] [~@2 x] [~ x@2]@2 [x ~@2] ~ [~@2 x@4]@2'.mini)
  .voicings(['G3','A4'])
).slow(4)`;
export const magicSofa = `stack(
  '[C^7 F^7 ~]/3 [Dm7 G7 A7 ~]/4'.mini
   .every(2, fast(2))
   .voicings(),
  '[c2 f2 g2]/3 [d2 g2 a2 e2]/4'.mini
).slow(1)
  .transpose.slowcat(0, 2, 3, 4)`;
export const confusedPhoneDynamic = `stack('[g2 ~@1.3] [c3 ~@1.3]'.mini.slow(2))
.superimpose(
  ...[-12,7,10,12,24].slice(0,5).map((t,i,{length}) => x => transpose(t,x).late(i/length))
)
.scale(sequence('C dorian', 'C mixolydian').slow(4))
.scaleTranspose(slowcat(0,1,2,1).slow(2))
.synth('triangle').gain(0.5).filter(1500)`;
export const confusedPhone = `'[g2 ~@1.3] [c3 ~@1.3]'.mini
.superimpose(
  transpose(-12).late(0),
  transpose(7).late(0.1),
  transpose(10).late(0.2),
  transpose(12).late(0.3),
  transpose(24).late(0.4)
)
.scale(slowcat('C dorian', 'C mixolydian'))
.scaleTranspose(slowcat(0,1,2,1))
.slow(2)`;
