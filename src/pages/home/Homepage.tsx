import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SpecialtiesSection from "./components/SpecialtiesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection"; 
import { useLocation } from "react-router-dom";
import { NotificationProps } from "../../notification/Notification";
import { Alert, Snackbar } from "@mui/material";
import { CheckCircleIcon } from "lucide-react";
import ErrorIcon from "@mui/icons-material/Error";
import SlideTransitions from "../../slide/SlideTransition";
import { LoginState } from "../../types/routeState";
const Homepage: React.FC = () => {
  const [notification, setNotification] = React.useState<NotificationProps>({
    open: false,
    message: "",
    severity: "success"
  });
  const location = useLocation();
  const handleClose = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };
  React.useEffect(
    () => {
      const state = location.state as LoginState | null;
      if (state !== null && state.loginSuccess) {
        setNotification({
          open: true,
          message: "Đăng nhập thành công",
          severity: "success"
        });
      }
    },
    [location]
  );
  return (
    <div className="-mt-20 -mb-20 bg-linear-to-br from-stone-50 via-amber-50 to-rose-50">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Crimson Pro', serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        
        .gradient-text {
          background: linear-gradient(135deg, #dc2626, #ea580c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(251, 146, 60, 0.3));
          filter: blur(40px);
        }
        
        .specialty-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .specialty-card:hover {
          transform: translateY(-8px) scale(1.02);
        }
        
        .testimonial-card {
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateX(8px);
        }
      `}</style>

      <HeroSection />
      <FeaturesSection />
      <SpecialtiesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
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
};

export default Homepage;
