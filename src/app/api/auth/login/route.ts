import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }
    if(!(email === 'test@example.com' && password === 'password')) return NextResponse.json(
      { error: "Credenciales inválidas" },
      { status: 401 }
    );
    const fakeToken = `fake-jwt-token-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}`;

    const _response = {
      token: fakeToken,
      user: {
        email,
        name: email.split("@")[0],
      },
    };
    const response = NextResponse.json(_response, { status: 200 });
    response.cookies.set({
      name: "auth-token",
      value: fakeToken,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
