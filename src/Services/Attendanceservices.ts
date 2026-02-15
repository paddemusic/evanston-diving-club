export interface AttendanceRecord {
    id: string;
    studentId: string;
    studentName: string;
    date: string;
    status: "present" | "absent" | "excused";
    notes?: string;
}

export interface Student {
    id: string;
    name: string;
    email: string;
    phone: string;
    level: string;
    emergencyContact: string;
}

// Mock data for development
const mockStudents: Student[] = [
    {
        id: "1",
        name: "Emma Johnson",
        email: "emma.j@example.com",
        phone: "(847) 555-0101",
        level: "Beginner",
        emergencyContact: "(847) 555-0102",
    },
    {
        id: "2",
        name: "Liam Smith",
        email: "liam.s@example.com",
        phone: "(847) 555-0103",
        level: "Intermediate",
        emergencyContact: "(847) 555-0104",
    },
    {
        id: "3",
        name: "Olivia Brown",
        email: "olivia.b@example.com",
        phone: "(847) 555-0105",
        level: "Advanced",
        emergencyContact: "(847) 555-0106",
    },
];

const mockAttendance: AttendanceRecord[] = [];

export const attendanceService = {
    getStudents: async (): Promise<Student[]> => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockStudents;
    },

    getAttendance: async (date: string): Promise<AttendanceRecord[]> => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockAttendance.filter((record) => record.date === date);
    },

    markAttendance: async (
        studentId: string,
        date: string,
        status: AttendanceRecord["status"],
        notes?: string
    ): Promise<AttendanceRecord> => {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const student = mockStudents.find((s) => s.id === studentId);
        if (!student) throw new Error("Student not found");

        const existingIndex = mockAttendance.findIndex(
            (r) => r.studentId === studentId && r.date === date
        );

        const record: AttendanceRecord = {
            id: existingIndex >= 0 ? mockAttendance[existingIndex].id : Date.now().toString(),
            studentId,
            studentName: student.name,
            date,
            status,
            notes,
        };

        if (existingIndex >= 0) {
            mockAttendance[existingIndex] = record;
        } else {
            mockAttendance.push(record);
        }

        return record;
    },

    getStudentAttendance: async (studentId: string): Promise<AttendanceRecord[]> => {
        await new Promise((resolve) => setTimeout(resolve, 300));
        return mockAttendance.filter((record) => record.studentId === studentId);
    },
};