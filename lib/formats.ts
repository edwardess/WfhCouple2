export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "TRY",
  }).format(price)
}

export const getPublicIdFromCloudinaryURL = (url: string) => {
  // Split the URL using '/' as the delimiter
  const parts = url.split('/');

  // Find the index of 'upload' in the array
  const uploadIndex = parts.indexOf('upload');

  // Check if 'upload' exists and there are enough parts following it
  if (uploadIndex !== -1 && parts.length > uploadIndex + 1) {
    // The public ID is everything after the upload path
    const publicIdWithExtension = parts.slice(uploadIndex + 1).join('/'); // Join the rest of the parts
    const [publicId] = publicIdWithExtension.split('.'); // Split by dot to remove the extension

    // Ensure to return a valid public ID, or fallback to a default string
    return publicId || 'default_public_id'; // Change 'default_public_id' to whatever makes sense in your context
  }

  // Return a default public ID or empty string if public ID cannot be determined
  return 'default_public_id'; // Ensure this is a string, change as needed
}
