export async function storeData(key: string, data: any): Promise<void> {
  // In a production environment, this would store data in IPFS/Filecoin
  localStorage.setItem(key, JSON.stringify(data));
}

export async function getData(key: string): Promise<any> {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}