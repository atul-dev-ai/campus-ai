export interface UserProfile {
  id: string; // UUID matches Supabase auth.users ID
  role: "student" | "faculty" | "admin";
  full_name: string;
  id_number: string; // e.g., 2026-123-456 or FAC-001
  email: string;
  phone: string | null;
  avatar_url: string | null;
  website_link: string | null;
  bio: string | null;
  department: string | null;
  created_at: string;
  updated_at: string;
}
