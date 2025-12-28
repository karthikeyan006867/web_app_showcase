import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { appId } = await req.json();

    // Record app visit
    await prisma.appVisit.create({
      data: {
        userId,
        webAppId: appId,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visit tracking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const appId = searchParams.get("appId");

    if (!appId) {
      return NextResponse.json({ error: "App ID required" }, { status: 400 });
    }

    const visitCount = await prisma.appVisit.count({
      where: { webAppId: appId },
    });

    return NextResponse.json({ visits: visitCount });
  } catch (error) {
    console.error("Get visits error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
