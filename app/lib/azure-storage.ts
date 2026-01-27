import { BlobServiceClient } from '@azure/storage-blob'

function getBlobServiceClient() {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING
  if (!connectionString) {
    throw new Error('Azure connection string missing')
  }
  return BlobServiceClient.fromConnectionString(connectionString)
}

export async function uploadToAzure(
  file: Buffer,
  filename: string,
  mimeType: string
): Promise<string> {
  const blobServiceClient = getBlobServiceClient()
  const containerClient = blobServiceClient.getContainerClient('documents')
  
  const blobName = `uploads/${Date.now()}-${filename}`
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)
  
  await blockBlobClient.upload(file, file.length, {
    blobHTTPHeaders: { blobContentType: mimeType },
  })
  
  return blobName
}

export async function getFromAzure(blobName: string): Promise<Buffer> {
  const blobServiceClient = getBlobServiceClient()
  const containerClient = blobServiceClient.getContainerClient('documents')
  const blockBlobClient = containerClient.getBlockBlobClient(blobName)
  
  const downloadResponse = await blockBlobClient.download(0)
  const chunks: Buffer[] = []
  
  for await (const chunk of downloadResponse.readableStreamBody as any) {
    chunks.push(Buffer.from(chunk))
  }
  
  return Buffer.concat(chunks)
}