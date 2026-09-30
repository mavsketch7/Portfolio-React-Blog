const API_URL = process.env.API_URL ?? 'http://localhost:8000'
const isDev = process.env.NODE_ENV === 'development'

type ApiEnvelope<T> = { data: T }

export async function apiFetch<T>(
  path: string,
  options?: { tag?: string; revalidate?: number },
): Promise<T> {
  const response = await fetch(`${API_URL}/api${path}`, {
    // BanaHosting bloquea peticiones sin User-Agent (las trata como escaneos).
    // El fetch nativo de Node/Vercel no manda uno por defecto.
    headers: {
      'User-Agent': 'PortfolioNextApp/1.0 (+https://manualbaweb.com)',
    },
    // En local, sin caché: así el panel y el sitio se ven sincronizados al
    // instante. En producción, ISR con revalidate/tags como de costumbre.
    cache: isDev ? 'no-store' : undefined,
    next: isDev
      ? undefined
      : {
          revalidate: options?.revalidate ?? 3600,
          tags: options?.tag ? [options.tag] : undefined,
        },
  })

  if (!response.ok) {
    throw new Error(`API request failed (${response.status}): ${path}`)
  }

  const json = (await response.json()) as ApiEnvelope<T>
  return json.data
}
