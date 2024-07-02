export const isBrowser = typeof window !== "undefined";

export const copyTextToClipboard = async (
  value: string,
  options: { onSuccess?: () => void; onError: (error: Error) => void }
) => {
  const write = await navigator.permissions.query({
    name: "clipboard-write" as PermissionName,
  });

  if (write.state !== "granted") {
    options.onError(new Error("clipboard-write denied"));
    return;
  }

  navigator.clipboard
    .writeText(value)
    .then(options.onSuccess)
    .catch(options.onError);
};
