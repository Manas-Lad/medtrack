export const inventoryData = [
  {
    sku: "CSM-001",
    name: "Surgical Gloves (Medium)",
    category: "Consumables",
    currentStock: "1,200",
    parLevel: "1,000",
    status: "OPTIMAL"
  },
  {
    sku: "FLD-042",
    name: "Saline IV Bags (1L)",
    category: "Fluids",
    currentStock: "450",
    parLevel: "600",
    status: "LOW"
  },
  {
    sku: "MED-110",
    name: "Epinephrine Auto-Injectors",
    category: "Medications",
    currentStock: "12",
    parLevel: "50",
    status: "CRITICAL"
  },
  {
    sku: "EQP-005",
    name: "Defibrillator Pads (Adult)",
    category: "Equipment",
    currentStock: "85",
    parLevel: "100",
    status: "LOW"
  },
  {
    sku: "CSM-089",
    name: "Gauze Sponges (4x4)",
    category: "Consumables",
    currentStock: "5,000",
    parLevel: "3,000",
    status: "OPTIMAL"
  }
];

export const shipmentsData = [
  {
    id: "PO-8829-XR",
    date: "Oct 24, 2023",
    vendor: "PharmaCorp Intl.",
    destination: "General Hospital Wing B",
    value: "$45,200.00",
    status: "IN TRANSIT",
    action: "Track",
    icon: "Building2"
  },
  {
    id: "PO-8830-AB",
    date: "Oct 22, 2023",
    vendor: "Surgical Tech Co.",
    destination: "City Clinic OR",
    value: "$12,450.00",
    status: "IN PRODUCTION",
    action: "View",
    icon: "Box"
  },
  {
    id: "PO-8821-ZZ",
    date: "Oct 18, 2023",
    vendor: "MedSupply Network",
    destination: "Regional Center",
    value: "$8,900.50",
    status: "RECEIVED",
    action: "Details",
    icon: "CheckCircle"
  },
  {
    id: "PO-8815-ER",
    date: "Oct 10, 2023",
    vendor: "BioLogistics Inc.",
    destination: "Main Blood Bank",
    value: "$105,000.00",
    status: "DELAYED",
    action: "Resolve",
    icon: "ShieldAlert"
  }
];
