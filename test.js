function decodeMessage() {
  try {
    const hash = window.location.hash.substring(1)
    const params = new URLSearchParams(hash)
    const encoded = params.get("c")

    if (!encoded) return null

    const binary = atob(encoded)
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    const json = JSON.parse(new TextDecoder().decode(bytes))
    return json.m || ""
  } catch (e) {
    return null
  }
}

console.log(decodeMessage())
