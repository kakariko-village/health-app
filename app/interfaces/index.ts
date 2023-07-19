export interface Notification {
    message: string;
    type: string;
}
export interface ChartItem {
    label: string;
    data: number[] | string [];
    borderColor: string;
    backgroundColor: string;
}

export interface DiaryItem {
    id: string
    date: string
    time: string
    title: string
    content: string
  }

export interface ColumnItem {
    id: string
    date: string
    time: string
    content: string
    img: string
    tags: string[]
}