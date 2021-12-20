class Station {
  name: string;
  id: string;
  fm: number;

  constructor(name: string, fm: number) {
    this.name = name;
    this.id = new Date().toISOString() + name;
    this.fm = fm;
  }
}

export default Station;
