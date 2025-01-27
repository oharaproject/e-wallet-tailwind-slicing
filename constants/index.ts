export const transactionData = [
  {
    id: 1,
    iconClass: "i-material-symbols-download-rounded",
    title: "Mr. Archie Botsford",
    description: "20 Juni 2024",
    rightText: 154000,
    href: "#",
  },
  {
    id: 2,
    iconClass: "i-material-symbols-download-rounded",
    title: "Oliver Kihn",
    description: "20 Juni 2024",
    rightText: -154000,
    href: "#",
  },
  {
    id: 3,
    iconClass: "i-material-symbols-download-rounded",
    title: "Nichole Kunze",
    description: "20 Juni 2024",
    rightText: 0,
    href: "#",
  },
  {
    id: 4,
    iconClass: "i-material-symbols-download-rounded",
    title: "Ayrton Senna",
    description: "20 Juni 2024",
    rightText: 154000,
    href: "#",
  },
  {
    id: 5,
    iconClass: "i-material-symbols-download-rounded",
    title: "Niki Lauda",
    description: "20 Juni 2024",
    rightText: 154000,
    href: "#",
  },
  {
    id: 6,
    iconClass: "i-material-symbols-download-rounded",
    title: "Mike Tyson",
    description: "20 Juni 2024",
    rightText: 154000,
    href: "#",
  },
  {
    id: 7,
    iconClass: "i-material-symbols-download-rounded",
    title: "Steven Harvey",
    description: "20 Juni 2024",
    rightText: -154000,
    href: "#",
  },
];

export const userData = {
  id: 1,
  avatar: "https://avatar.iran.liara.run/public/28",
  name: "John Doe",
  balance: 56094343,
};

export const transactionStatusData = {
  transactionId: "KS08387847",
  amount: -300000,
  category: "Uang Keluar",
  recipient: "Jane Dane",
  bank: "BCA",
  accountNumber: "594576747746",
  transactionTime: "20 Juni 2024 19:00 WIB",
  status: "Transaksi Berhasil Diproses",
};

export const statusConfig = {
  "Transaksi Berhasil Diproses": {
    backgroundColor: "bg-brands-light-green",
    icon: "i-material-symbols-receipt-rounded",
  },
  "Transaksi Sedang Diproses": {
    backgroundColor: "bg-gray-950", // #9CA3AF
    icon: "i-material-symbols-close",
  },
  "Transaksi Dibatalkan": {
    backgroundColor: "bg-yellow-400", // #FBBF24
    icon: "i-material-symbols-help-rounded",
  },
  "Sistem Gagal Memproses Transaksi": {
    backgroundColor: "bg-red-500", // #EF4444
    icon: "i-material-symbols-help-rounded",
  },
  "Transaksi Kadaluarsa": {
    backgroundColor: "bg-pink-400", // #FB7185
    icon: "i-material-symbols-help-rounded",
  },
};
