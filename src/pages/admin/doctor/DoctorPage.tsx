import React from "react";
import DoctorHeader from "./components/DoctorHeader";
import DoctorStats from "./components/DoctorStats";
import DoctorFilters from "./components/DoctorFilters";
import DoctorCard from "./components/DoctorCard";
import DoctorModal from "./components/DoctorModal";
import EmptyState from "./components/EmptyState";
import GlobalStyles from "./components/GlobalStyles";
import { useDoctor } from "../../../features/doctor/useDoctors";
import type { DataDoctor } from "../../../features/doctor/doctorSaga";

// Interface phù hợp với API

export default function DoctorPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterSpecialty, setFilterSpecialty] = React.useState("all");
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingDoctor, setEditingDoctor] = React.useState<DataDoctor | null>(
    null
  );
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [specialty, setSpecialty] = React.useState<string>("");
  const {
    data: doctors = [],
    createDoctor
  } = useDoctor();
  // Computed values
  const specialties = React.useMemo(() => {
    return Array.from(new Set(doctors.map((d) => d.specialty)));
  }, [doctors]);

  const filteredDoctors = React.useMemo(() => {
    return doctors.filter((doctor: DataDoctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.phone.includes(searchTerm);
      const matchesSpecialty =
        filterSpecialty === "all" || doctor.specialty === filterSpecialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [doctors, searchTerm, filterSpecialty]);

  // Event handlers
  const handleOpenModal = (doctor?: DataDoctor) => {
    if (doctor) {
      setEditingDoctor(doctor);
      setName(doctor.name);
      setSpecialty(doctor.specialty);
      setPhone(doctor.phone);
    } else {
      setEditingDoctor(null);
      setName("");
      setSpecialty("");
      setPhone("");
    }
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingDoctor(null);
    setName("");
    setSpecialty("");
    setPhone("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingDoctor) {
      // // Update doctor
      // setDoctors(
      //   doctors.map((d) =>
      //     d.id === editingDoctor.id ? { ...d, name, specialty, phone } : d
      //   )
      // );
    } else {
      // Add new doctor
      try {
        createDoctor(
          {
            name,
            specialty,
            phone
          },
          {
            onSuccess: () => {
              console.log("Tạo bác sĩ thành công!");
              handleCloseModal();
            },
            onError: (err) => {
              console.log("Tạo thất bại", err);
            }
          }
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }

    handleCloseModal();
  };

  const handleDelete = () => {
    // if (confirm("Bạn có chắc chắn muốn xóa bác sĩ này?")) {
    //   setDoctors(doctors.filter((d) => d.id !== id));
    // }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <GlobalStyles />

      {/* Header Section */}
      <div className="glass-effect border-b border-slate-200/50 animate-slide-in sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <DoctorHeader onAddDoctor={() => handleOpenModal()} />
          <DoctorStats
            totalDoctors={doctors.length}
            totalSpecialties={specialties.length - 1}
            filteredCount={filteredDoctors.length}
          />
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <DoctorFilters
          searchTerm={searchTerm}
          filterSpecialty={filterSpecialty}
          specialties={specialties}
          onSearchChange={setSearchTerm}
          onSpecialtyChange={setFilterSpecialty}
        />
      </div>

      {/* Doctors Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor: DataDoctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onEdit={() => handleOpenModal(doctor)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Add/Edit Modal */}
      <DoctorModal
        isOpen={showAddModal}
        editingDoctor={editingDoctor}
        name={name}
        specialty={specialty}
        phone={phone}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        setName={setName}
        setSpecialty={setSpecialty}
        setPhone={setPhone}
      />
    </div>
  );
}
