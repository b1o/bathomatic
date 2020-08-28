import { RoomStatus } from './room-status.enum';
import { Device } from '../admin/models/device';

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
  bathDevices: Device[];
  showerDevices: Device[];
  steamDevices: Device[];
}
