export default class CppObject {
  protected ptr: number;
  protected inst: any;

  protected constructor(ptr: number, inst: any) {
    this.ptr = ptr;
    this.inst = inst;
  }

  protected checkAlive(): void {
    if (this.ptr) return;
    throw Error('Call after destroyed');
  }
}