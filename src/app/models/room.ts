import { RoomStatus } from './room-status.enum';

export interface Room {
  id: number | string;
  bath: boolean;
  shower: boolean;
  steam: boolean;
  occupied: boolean;
  occupiedFor: string;
  roomFloor: number;
  roomNumber: number;
  roomStatus: RoomStatus;
  tenantName: string;
  isLocked: boolean;
  key: string;
}
