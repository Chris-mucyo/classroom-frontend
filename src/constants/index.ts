export const DEPARTMENTS = [
    'CS',
    'Math',
    'Physics',
    'Chemistry',
    'Biology',
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map(dept => ({
    label: dept,
    value: dept.toLowerCase(),
}));