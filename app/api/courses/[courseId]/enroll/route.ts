import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { courseId: string } }) {
  try {
    const user = await currentUser();

    if (!user || !user.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        isPublished: true
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Check if the user has already purchased the course
    const purchase = await db.purchase.findUnique({
      where: {
        userId_courseId: {
          userId: user.id,
          courseId: params.courseId
        }
      }
    });
    
    if (purchase) {
      return new NextResponse("Already purchased", { status: 400 });
    }

    // Record the purchase in the database
    await db.purchase.create({
      data: {
        userId: user.id,
        courseId: params.courseId,
        createdAt: new Date() // Optional: Track when the purchase was made
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[COURSE_ENROLL]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
