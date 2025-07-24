export interface ApiResponse {
  success: boolean;
  data?: unknown;
  status?: number;
  message: string;
}
