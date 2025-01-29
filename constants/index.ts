export const transactionData = [
  {
    id: 1,
    iconClass: "i-material-symbols-download-rounded",
    title: "Mr. Archie Botsford",
    description: "20 Januari 2024",
    rightText: 154000,
    href: "#",
  },
  {
    id: 2,
    iconClass: "i-material-symbols-download-rounded",
    title: "Oliver Kihn",
    description: "20 Februari 2024",
    rightText: -160000,
    href: "#",
  },
  {
    id: 3,
    iconClass: "i-material-symbols-download-rounded",
    title: "Nichole Kunze",
    description: "20 Maret 2024",
    rightText: 1000,
    href: "#",
  },
  {
    id: 4,
    iconClass: "i-material-symbols-download-rounded",
    title: "Ayrton Senna",
    description: "20 April 2024",
    rightText: 1165000,
    href: "#",
  },
  {
    id: 5,
    iconClass: "i-material-symbols-download-rounded",
    title: "Niki Lauda",
    description: "20 Mei 2024",
    rightText: 170000,
    href: "#",
  },
  {
    id: 6,
    iconClass: "i-material-symbols-download-rounded",
    title: "Mike Tyson",
    description: "20 Juni 2024",
    rightText: 175000,
    href: "#",
  },
  {
    id: 7,
    iconClass: "i-material-symbols-download-rounded",
    title: "Steven Harvey",
    description: "20 Juli 2024",
    rightText: -199000,
    href: "#",
  },
];

export const userData = {
  id: 1,
  avatar: "https://avatar.iran.liara.run/public/28",
  name: "John Doe",
  balance: 56094343,
  accountNumber: 29352335290375,
};

export const transactionStatusData = {
  transactionId: "KS08387847",
  amount: -300000,
  category: "Uang Keluar",
  recipient: "Jane Dane",
  bank: "BCA",
  accountNumber: "594576747746",
  transactionTime: "20 Juni 2024 19:00 WIB",
  status: "Transaksi Kadaluarsa",
};

export const statusConfig: Record<
  string,
  {
    backgroundColor: string;
    textColor?: string;
    buttonTitle: string;
    icon: string;
    statusDescription: string | null;
  }
> = {
  "Transaksi Berhasil Diproses": {
    backgroundColor: "bg-brands-light-green",
    buttonTitle: "Lihat Transaksi Lainnya",
    icon: "i-material-symbols-receipt-rounded",
    statusDescription: null,
  },
  "Transaksi Sedang Diproses": {
    backgroundColor: "bg-brands-transaction-processed",
    buttonTitle: "Batalkan Transaksi",
    icon: "i-material-symbols-cancel-sharp",
    statusDescription: null,
  },
  "Transaksi Dibatalkan": {
    backgroundColor: "bg-brands-transaction-canceled",
    textColor: "bg-brands-transaction-canceled-title",
    buttonTitle: "Butuh Bantuan?",
    icon: "i-material-symbols-help-rounded",
    statusDescription: "Dana sudah dikembalikan ke saldo Anda",
  },
  "Sistem Gagal Memproses Transaksi": {
    backgroundColor: "bg-brands-transaction-failed",
    buttonTitle: "Butuh Bantuan?",
    icon: "i-material-symbols-help-rounded",
    statusDescription: "Dana sudah dikembalikan ke saldo Anda",
  },
  "Transaksi Kadaluarsa": {
    backgroundColor: "bg-brands-transaction-expired",
    buttonTitle: "Butuh Bantuan?",
    icon: "i-material-symbols-help-rounded",
    statusDescription:
      "Anda sudah melewati batas waktu transaksi yang diharapkan",
  },
};

export const accountMenuItems = [
  {
    id: 1,
    icon: "i-material-symbols-manage-accounts-rounded",
    title: "Pengaturan",
    description: "",
    rightText: "",
    link: "/settings",
  },
  {
    id: 2,
    icon: "i-material-symbols-help-rounded",
    title: "Pusat Bantuan",
    description: "",
    rightText: "",
    link: "/help-center",
  },
  {
    id: 3,
    icon: "i-material-symbols-book-rounded",
    title: "Syarat & Ketentuan",
    description: "",
    rightText: "",
    link: "/terms-and-conditions",
  },
  {
    id: 4,
    icon: "i-material-symbols-info-rounded",
    title: "Tentang KUSAKU",
    description: "",
    rightText: "",
    link: "/about",
  },
];
