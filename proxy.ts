import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    const newHeader = new Headers(request.headers)

    if (request.nextUrl.pathname === '/card/') {
        newHeader.set('x-skip-wrapper', 'true')
    } else {
        newHeader.set('x-skip-wrapper', 'false')
    }

    console.log(request)
    return NextResponse.next({
        request: {
            headers: newHeader
        }
    })

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

// See "Matching Paths" below to learn more