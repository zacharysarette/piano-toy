const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
const numberOfOctaves = 8

export function getTotalNotes () {
  const totalNotes = []
  for (let index = 1; index < numberOfOctaves; index++) {
    for (let i = 0; i < notes.length; i++) {
      totalNotes.push(notes[i] + index)
    }
  }
  return totalNotes
}
