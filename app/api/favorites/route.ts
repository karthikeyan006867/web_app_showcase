import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { appId } = await req.json();

    // Check if favorite already exists
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        userId_webAppId: {
          userId,
          webAppId: appId,
        },
      },
    });

    if (existingFavorite) {
      // Remove favorite
      await prisma.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });
      return NextResponse.json({ favorited: false });
    } else {
      // Add favorite
      await prisma.favorite.create({
        data: {
          userId,
          webAppId: appId,
        },
      });
      return NextResponse.json({ favorited: true });
    }
  } catch (error) {
    console.error("Favorite toggle error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      include: {
        webApp: true,
      },
    });

    return NextResponse.json(favorites);
  } catch (error) {
    console.error("Get favorites error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
