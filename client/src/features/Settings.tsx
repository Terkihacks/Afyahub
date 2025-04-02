import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Camera, Loader, Check, X, MapPin } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

interface FormErrors {
  fullName?: string;
  email?: string;
  bio?: string;
  image?: string;
}

export default function Settings() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    social: {
      facebook: "",
      twitter: "",
      linkedin: ""
    }
  });

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfileImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setErrors(prev => ({ ...prev, image: "File size should be less than 5MB" }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"]
    },
    maxSize: 5 * 1024 * 1024
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("social.")) {
      const socialField = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        social: {
          ...prev.social,
          [socialField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.bio.length > 250) newErrors.bio = "Bio cannot exceed 250 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus("submitting");
      
      try {
        // API call would go here
        await new Promise(resolve => setTimeout(resolve, 2000));
        setSubmitStatus("success");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-8 sm:px-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Create Your Profile</h2>
            <p className="mt-2 text-gray-400">Complete your profile to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center">
              <div
                {...getRootProps()}
                className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer border-2 border-dashed border-gray-500 hover:border-blue-500 transition-colors"
              >
                <input {...getInputProps()} aria-label="Profile photo upload" />
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700">
                    <Camera className="text-gray-400 w-8 h-8" />
                  </div>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-400">
                {isDragActive ? "Drop your photo here" : "Click or drag to upload photo"}
              </p>
              {errors.image && (
                <p className="mt-1 text-red-500 text-sm">{errors.image}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">
                  Location
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="text-gray-400 w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="block w-full pl-10 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-300">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Tell us about yourself..."
              />
              <p className="mt-2 text-sm text-gray-400">
                {formData.bio.length}/250 characters
              </p>
              {errors.bio && (
                <p className="mt-1 text-red-500 text-sm">{errors.bio}</p>
              )}
            </div>

            {/* Social Media Links */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-300">Social Media Links</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
                  <Facebook className="text-blue-500 w-5 h-5" />
                  <input
                    type="text"
                    name="social.facebook"
                    value={formData.social.facebook}
                    onChange={handleInputChange}
                    placeholder="Facebook URL"
                    className="bg-transparent border-none focus:ring-0 text-white w-full"
                  />
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
                  <Twitter className="text-blue-400 w-5 h-5" />
                  <input
                    type="text"
                    name="social.twitter"
                    value={formData.social.twitter}
                    onChange={handleInputChange}
                    placeholder="Twitter URL"
                    className="bg-transparent border-none focus:ring-0 text-white w-full"
                  />
                </div>
                <div className="flex items-center space-x-2 bg-gray-700 p-3 rounded-md">
                  <Linkedin className="text-blue-600 w-5 h-5" />
                  <input
                    type="text"
                    name="social.linkedin"
                    value={formData.social.linkedin}
                    onChange={handleInputChange}
                    placeholder="LinkedIn URL"
                    className="bg-transparent border-none focus:ring-0 text-white w-full"
                  />
                </div>
              </div>
            </div> */}

            {/* Submit Button */}
            <div className="pt-5">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-blue-600 opacity-75 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
              >
                {isSubmitting ? (
                  <Loader className="animate-spin w-5 h-5" />
                ) : submitStatus === "success" ? (
                  <Check className="w-5 h-5" />
                ) : submitStatus === "error" ? (
                  <X className="w-5 h-5" />
                ) : (
                  "Create Profile"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
