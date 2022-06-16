export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    message:(obj: SocketData) => void;
  }
  
export  interface ClientToServerEvents {
    emit: (data: SocketData) => void;
  }
  
export interface InterServerEvents {
    ping: () => void;
}
  
export interface SocketData {
    text: string;
    member: string;
}