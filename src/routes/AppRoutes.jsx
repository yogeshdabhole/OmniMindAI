import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import ChatPage from '../pages/ChatPage';
import PdfChatPage from '../pages/PdfChatPage';
import OcrPage from '../pages/OcrPage';
import ImageGeneratorPage from '../pages/ImageGeneratorPage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/pdf-chat" element={<PdfChatPage />} />
      <Route path="/ocr" element={<OcrPage />} />
      <Route path="/image-generator" element={<ImageGeneratorPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
