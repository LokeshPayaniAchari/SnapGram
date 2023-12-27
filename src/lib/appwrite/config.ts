import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  // databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  // storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  // userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  // postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  // savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
  databaseId: '658bbfee3560331fe269',
  storageId: '658bbf552cbb332d53fd',
  userCollectionId: '658bc0756f0e4a595a54',
  postCollectionId: '658bc03fd4416f83060',
  savesCollectionId: '658bc091597bf3b6d6b6',
};

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('658a8ad6b5c93f903c4f');
// client.setEndpoint(appwriteConfig.url)
// client.setProject(appwriteConfig.postCollectionId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
