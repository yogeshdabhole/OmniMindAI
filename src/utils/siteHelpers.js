export function createSectionId(label) {
  return label.toLowerCase().replace(/\s+/g, '-');
}
