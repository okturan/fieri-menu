export function matchesSearch(item, searchTerm) {
  if (!searchTerm.trim()) return true;
  const term = searchTerm.trim().toLocaleLowerCase();
  const text = `${item.nameSq} ${item.nameEn} ${item.nameTr} ${item.searchTags || ''}`.toLocaleLowerCase();
  return text.includes(term);
}
