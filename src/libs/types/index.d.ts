type Activity = {
  id: string;
  createdAt?: string;
  updatedAt?: string;

  title: string;
  description: string;
  category: string;
  isCanceled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
  date: Date | string;
  attendees: User[];
};

type User = {
  id: string;
  email: string;
  displayName: string;
  imageUrl?: string;
};
