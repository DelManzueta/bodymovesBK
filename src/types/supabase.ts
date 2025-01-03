export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          first_name?: string | null
          last_name?: string | null
          email: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          description: string | null
          duration: string
          capacity: number
          instructor_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          duration: string
          capacity: number
          instructor_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          duration?: string
          capacity?: number
          instructor_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      // Add other table types as needed
    }
  }
}