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
  status: "Transaksi Dibatalkan",
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
    backgroundColor: "bg-status-processed",
    buttonTitle: "Batalkan Transaksi",
    icon: "i-material-symbols-cancel-sharp",
    statusDescription: null,
  },
  "Transaksi Dibatalkan": {
    backgroundColor: "bg-status-canceled",
    textColor: "bg-status-canceled-text",
    buttonTitle: "Butuh Bantuan?",
    icon: "i-material-symbols-help-rounded",
    statusDescription: "Dana sudah dikembalikan ke saldo Anda",
  },
  "Sistem Gagal Memproses Transaksi": {
    backgroundColor: "bg-status-failed",
    buttonTitle: "Butuh Bantuan?",
    icon: "i-material-symbols-help-rounded",
    statusDescription: "Dana sudah dikembalikan ke saldo Anda",
  },
  "Transaksi Kadaluarsa": {
    backgroundColor: "bg-status-expired",
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

export const accountSettings = [
  {
    sectionTitle: "Informasi Personal",
    inputs: [
      {
        id: "nama",
        type: "text",
        label: "Nama",
        placeholder: "Masukan Nama",
        icon: "i-material-symbols-person-rounded",
        componentType: "input",
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "Masukan Email",
        icon: "i-material-symbols-mail-rounded",
        componentType: "input",
      },
    ],
  },
  {
    sectionTitle: "Keamanan PIN",
    inputs: [
      {
        id: "oldPin",
        type: "password",
        label: "PIN Lama",
        placeholder: "Masukan 6 digit PIN lama",
        icon: "i-material-symbols-security-rounded",
        componentType: "input",
      },
      {
        id: "newPin",
        type: "password",
        label: "PIN Baru",
        placeholder: "Buat 6 digit PIN baru",
        icon: "i-material-symbols-security-rounded",
        componentType: "input",
      },
      {
        id: "confirmPin",
        type: "password",
        label: "Konfirmasi PIN",
        placeholder: "Konfirmasi 6 digit PIN baru",
        icon: "i-material-symbols-security-rounded",
        componentType: "input",
      },
    ],
  },
  {
    sectionTitle: "Penarikan Dana",
    inputs: [
      {
        id: "bank",
        type: "text",
        label: "Pilih Bank",
        placeholder: "Pilih bank tujuan",
        icon: "i-material-symbols-account-balance-rounded",
        componentType: "select",
        options: ["Bank BRI", "Bank BCA", "Bank Jago"],
      },
      {
        id: "accountName",
        type: "text",
        label: "Nama di Rekening",
        placeholder: "Masukan nama pemilik rekening",
        icon: "i-material-symbols-person-rounded",
        componentType: "input",
      },
      {
        id: "accountNumber",
        type: "text",
        label: "No. Rekening",
        placeholder: "Masukan No. Rekening",
        icon: "i-material-symbols-account-balance-wallet",
        componentType: "input",
      },
    ],
  },
];

export const contactData = [
  {
    name: "Jonathon Bayer",
    account: "257475257",
    icon: "i-material-symbols-person-outline-rounded",
  },
  {
    name: "Carrie Hill",
    account: "289757327",
    icon: "i-material-symbols-person-outline-rounded",
  },
  {
    name: "Caleb Wolff",
    account: "259747527",
    icon: "i-material-symbols-person-outline-rounded",
  },
  {
    name: "Lynda Boer",
    account: "289747537",
    icon: "i-material-symbols-person-outline-rounded",
  },
  {
    name: "Jose Spinka",
    account: "289757547",
    icon: "i-material-symbols-person-outline-rounded",
  },
];
