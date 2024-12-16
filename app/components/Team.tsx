'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaUserTie, FaChalkboardTeacher, FaUserCog, FaUsers } from 'react-icons/fa'; // Make sure to install react-icons

const Team = () => {
  const router = useRouter();
  const { t } = useTranslation('team');

  const facultyMembers = [
    {
      name: "Galathara Kahanda",
      role: t('roles.professor'),
      icon: <FaUserTie className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.kahanda')
    },
    {
      name: "Malky Widanaarachchi",
      role: t('roles.mentor'),
      icon: <FaChalkboardTeacher className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.malky')
    }
  ];

  const teamMembers = [
    {
      name: "Byron Gomez Jr.",
      role: t('roles.pm'),
      icon: <FaUserCog className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.byron')
    },
    {
      name: "Adam Shimou",
      role: t('roles.member-one'),
      icon: <FaUsers className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.adam')
    },
    {
      name: "Niekelle Bloomfield",
      role: t('roles.member-two'),
      icon: <FaUsers className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.niekelle')
    },
    {
      name: "Olumayowa Otunuga",
      role: t('roles.member-three'),
      icon: <FaUsers className="w-16 h-16 text-emerald-600 mb-4" />,
      bio: t('bio.olumayowa')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.back()}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('backButton')}
        </motion.button>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          {t('title')}
        </motion.h1>

        {/* Faculty Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8"
        >
          {t('facultyTitle')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-300 dark:border-gray-700 my-12"></div>

        {/* Team Members Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8"
        >
          {t('teamTitle')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center">
                {member.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
