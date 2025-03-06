import { useState } from "react";
import { FaCamera, FaCertificate } from "react-icons/fa";

const DashboardStudentPage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    notifications: {
      emailUpdates: true,
      courseAlerts: true,
      promotions: false,
    },
  });

  const [purchases] = useState([
    {
      id: "INV-2024-001",
      course: "Complete Web Development Bootcamp",
      date: "2024-01-15",
      amount: 89.99,
      status: "Completed",
    },
    {
      id: "INV-2024-002",
      course: "UI/UX Design Masterclass",
      date: "2024-02-01",
      amount: 69.99,
      status: "Completed",
    },
  ]);

  const [certificates] = useState([
    {
      id: "CERT-001",
      course: "Complete Web Development Bootcamp",
      issueDate: "2024-01-30",
      credential: "WD-12345",
    },
  ]);

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">
          User Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="relative inline-block">
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4"
                />
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-opacity-90">
                  <FaCamera className="text-sm" />
                </button>
              </div>
              <h2 className="text-xl font-semibold dark:text-white">
                {user.name}
              </h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
            <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Edit Profile
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="dark:text-white">Email Updates</span>
                <input
                  type="checkbox"
                  checked={user.notifications.emailUpdates}
                  onChange={() => {}}
                  className="toggle toggle-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="dark:text-white">Course Alerts</span>
                <input
                  type="checkbox"
                  checked={user.notifications.courseAlerts}
                  onChange={() => {}}
                  className="toggle toggle-primary"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="dark:text-white">Promotional Emails</span>
                <input
                  type="checkbox"
                  checked={user.notifications.promotions}
                  onChange={() => {}}
                  className="toggle toggle-primary"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">
              Certificates
            </h3>
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="border-b dark:border-gray-700 pb-4 mb-4 last:mb-0 last:pb-0"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium dark:text-white">
                    {cert.course}
                  </span>
                  <FaCertificate className="text-primary text-xl" />
                </div>
                <div className="text-sm text-gray-500">
                  <p>Issued: {cert.issueDate}</p>
                  <p>Credential ID: {cert.credential}</p>
                </div>
                <button className="mt-2 text-primary hover:underline text-sm">
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            Purchase History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-3 px-4 dark:text-white">
                    Invoice ID
                  </th>
                  <th className="text-left py-3 px-4 dark:text-white">
                    Course
                  </th>
                  <th className="text-left py-3 px-4 dark:text-white">Date</th>
                  <th className="text-left py-3 px-4 dark:text-white">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 dark:text-white">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr
                    key={purchase.id}
                    className="border-b dark:border-gray-700"
                  >
                    <td className="py-3 px-4 dark:text-white">{purchase.id}</td>
                    <td className="py-3 px-4 dark:text-white">
                      {purchase.course}
                    </td>
                    <td className="py-3 px-4 dark:text-white">
                      {purchase.date}
                    </td>
                    <td className="py-3 px-4 dark:text-white">
                      ${purchase.amount}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {purchase.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline text-sm">
                        Download Invoice
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudentPage;
