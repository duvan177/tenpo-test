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

    const fakeToken = `fake-jwt-token-${Date.now()}-${Math.random()
      .toString(36)
      .substring(7)}`;

    const response = {
      token: fakeToken,
      user: {
        email,
        name: email.split("@")[0],
      },
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
