import { Subject } from "../types";


export const mockSubjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Fundamental concepts of programming, algorithms, and computational thinking for beginners.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Mathematics",
        description: "Study of vectors, vector spaces, linear transformations, and matrix operations.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "PHY101",
        name: "General Physics",
        department: "Physics",
        description: "Introduction to mechanics, thermodynamics, waves, and basic electromagnetic principles.",
        createdAt: new Date().toISOString(),
    }
];