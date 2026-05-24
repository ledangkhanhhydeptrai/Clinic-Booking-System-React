import React from "react";
import DoctorHeader from "./components/DoctorHeader";
import DoctorStats from "./components/DoctorStats";
import DoctorFilters from "./components/DoctorFilters";
import DoctorCard from "./components/DoctorCard";
import DoctorModal from "./components/DoctorModal";
import EmptyState from "./components/EmptyState";
import GlobalStyles from "./components/GlobalStyles";
import ErrorIcon from "@mui/icons-material/Error";
import {
  useDoctor,
  type DataDoctor
} from "../../../features/doctor/useDoctors";
import { useNavigate } from "react-router-dom";
import { NotificationProps } from "../../../notification/Notification";
import { Alert, Snackbar } from "@mui/material";
import { CheckCircleIcon } from "lucide-react";
import SlideTransitions from "../../../slide/SlideTransition";
import { AxiosError } from "axios";
interface ApiErrorResponse {
  status: number;
  message: string;
  data: null;
}
export default function DoctorPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterSpecialty, setFilterSpecialty] = React.useState("all");
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [editingDoctor, setEditingDoctor] = React.useState<DataDoctor | null>(
    null
  );
  const navigate = useNavigate();
  const [name, setName] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [specialty, setSpecialty] = React.useState<string>("");
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success"
  });
  const { data: doctors = [], createDoctor } = useDoctor();
  const { updateDoctor, deleteDoctorAsync } = useDoctor();

  // Computed values
  const specialties = React.useMemo(() => {
    return Array.from(
      new Set(doctors.map((d: DataDoctor) => d.specialty))
    ) as string[];
  }, [doctors]);
  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };
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
      updateDoctor(
        {
          id: editingDoctor.id,
          name,
          specialty,
          phone
        },
        {
          onSuccess: () => {
            alert("Cập nhật thành công!");
            handleCloseModal();
          }
        }
      );
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
              setNotification({
                open: true,
                message: "Tạo bác sĩ thành công",
                severity: "success"
              });
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

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa bác sĩ này không?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoctorAsync(id);

      setNotification({
        open: true,
        message: "Xóa bác sĩ thành công",
        severity: "success"
      });
    } catch (error) {
      const errors = error as AxiosError<ApiErrorResponse>;

      console.error("Error:", errors);

      let message = "Có lỗi xảy ra khi xóa bác sĩ";

      if (errors.response && errors.response.data) {
        message = errors.response.data.message;
      }

      setNotification({
        open: true,
        message,
        severity: "error"
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-cyan-50">
      <GlobalStyles />

      {/* Header Section */}
      <div className="glass-effect border-b border-slate-200/50 animate-slide-in block top-10 z-50">
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
                onView={() => navigate(`/admin/doctor/doctorId/${doctor.id}`)}
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
      <Snackbar
        open={notification.open}
        onClose={handleClose}
        TransitionComponent={SlideTransitions}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={4000}
      >
        <Alert
          onClose={handleClose}
          severity={notification.severity}
          variant="filled"
          iconMapping={{
            success: <CheckCircleIcon fontSize="small" />,
            error: <ErrorIcon fontSize="small" />
          }}
          sx={{
            width: "100%",
            bgcolor:
              notification.severity === "success" ? "#4caf50" : "#f44336",
            color: "white",
            fontWeight: "bold",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            px: 2,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1
          }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
