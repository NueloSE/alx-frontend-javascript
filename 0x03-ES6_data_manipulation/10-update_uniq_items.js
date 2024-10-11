function updatingItem(value, key, myMap) {
  if (value === 1) {
    myMap.set(key, 100);
  }
}

export default function updateUniqueItems(mapList) {
  if (!(mapList instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    mapList.forEach(updatingItem);
  }
}
