-- CreateEnum
CREATE TYPE "LessonStatus" AS ENUM ('notstarted', 'ongoing', 'onhold', 'done');

-- CreateEnum
CREATE TYPE "LessonPriority" AS ENUM ('low', 'medium', 'high', 'urgent');

-- CreateEnum
CREATE TYPE "LessonCategory" AS ENUM ('history', 'math', 'programming', 'computing', 'engineering', 'language', 'linguistics', 'science', 'economics', 'law', 'world', 'biology', 'humanities', 'politics', 'other');

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "LessonCategory" NOT NULL,
    "status" "LessonStatus" NOT NULL DEFAULT 'notstarted',
    "priority" "LessonPriority" NOT NULL DEFAULT 'medium',
    "tags" TEXT,
    "links" TEXT[],
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
