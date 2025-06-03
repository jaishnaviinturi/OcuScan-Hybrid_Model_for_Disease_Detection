import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Activity, 
  Droplets,
  Clock,
  Zap
} from 'lucide-react';

interface ConditionInfo {
  title: string;
  description: string;
  recommendations: string[];
  bgColor: string;
  textColor: string;
  icon: JSX.Element;
}

export const getConditionInfo = (condition: string): ConditionInfo => {
  const conditions: Record<string, ConditionInfo> = {
    'cataract': {
      title: 'Cataract Detected',
      description: 'A cataract is a clouding of the normally clear lens of the eye. It can be compared to a window that is frosted or fogged. Cataracts typically develop slowly over time.',
      recommendations: [
        'Schedule an appointment with an ophthalmologist',
        'Consider cataract surgery if vision is significantly impaired',
        'Use brighter lighting for reading and other activities',
        'Use magnifying lenses for detailed tasks if needed'
      ],
      bgColor: 'bg-amber-50 border-amber-200',
      textColor: 'text-amber-800',
      icon: <AlertTriangle className="w-10 h-10 text-amber-500" />
    },
    'normal fundus': {
      title: 'Normal Eye Fundus',
      description: 'Your eye appears healthy with no signs of pathology in the fundus. The fundus is the interior lining of the eye, including the retina, optic disc, and blood vessels.',
      recommendations: [
        'Continue regular eye check-ups (every 1-2 years)',
        'Protect your eyes from UV light with sunglasses',
        'Take regular breaks when using digital screens (20-20-20 rule)',
        'Maintain a healthy lifestyle for continued eye health'
      ],
      bgColor: 'bg-green-50 border-green-200',
      textColor: 'text-green-800',
      icon: <CheckCircle className="w-10 h-10 text-green-500" />
    },
    'pathological myopia': {
      title: 'Pathological Myopia Detected',
      description: 'Pathological myopia is a severe form of nearsightedness where the eyeball continues to elongate abnormally. This can lead to stretching and thinning of the retina.',
      recommendations: [
        'Consult an ophthalmologist specializing in retinal conditions',
        'Regular monitoring is essential to detect potential complications',
        'Consider specialized contact lenses or glasses',
        'Be vigilant about symptoms like flashes of light or new floaters'
      ],
      bgColor: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-800',
      icon: <Eye className="w-10 h-10 text-purple-500" />
    },
    'moderate non proliferative retinopathy': {
      title: 'Moderate Diabetic Retinopathy',
      description: 'Moderate non-proliferative retinopathy is a stage of diabetic eye disease where blood vessels in the retina are damaged. This condition is common in people with diabetes.',
      recommendations: [
        'See an ophthalmologist promptly',
        'Maintain tight control of blood sugar levels',
        'Control blood pressure and cholesterol',
        'Follow up with regular eye examinations every 6 months'
      ],
      bgColor: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-800',
      icon: <Droplets className="w-10 h-10 text-orange-500" />
    },
    'mild nonproliferative retinopathy': {
      title: 'Mild Diabetic Retinopathy',
      description: 'Mild nonproliferative retinopathy is an early stage of diabetic eye disease characterized by small areas of balloon-like swelling in the retina\'s tiny blood vessels.',
      recommendations: [
        'Consult with an ophthalmologist',
        'Optimize diabetes management',
        'Schedule regular eye examinations',
        'Report any vision changes promptly'
      ],
      bgColor: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-800',
      icon: <Clock className="w-10 h-10 text-yellow-500" />
    },
    'dry age-related macular degeneration': {
      title: 'Dry Age-Related Macular Degeneration',
      description: 'Dry AMD is a common eye disorder among people over 50. It causes blurred or reduced central vision due to thinning of the macula, which is the part of the retina responsible for clear vision in your direct line of sight.',
      recommendations: [
        'See a retina specialist for confirmation and monitoring',
        'Consider AREDS2 supplements after consulting your doctor',
        'Monitor your vision with an Amsler grid',
        'Adopt a diet rich in leafy greens and fish'
      ],
      bgColor: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-800',
      icon: <Activity className="w-10 h-10 text-blue-500" />
    },
    'glaucoma': {
      title: 'Glaucoma Detected',
      description: 'Glaucoma is a group of eye conditions that damage the optic nerve, often caused by abnormally high pressure in your eye. It\'s one of the leading causes of blindness in people over 60.',
      recommendations: [
        'Seek immediate care from a glaucoma specialist',
        'Begin prescribed eye drops or medications promptly',
        'Consider laser treatment or surgery if recommended',
        'Maintain regular follow-ups to monitor eye pressure'
      ],
      bgColor: 'bg-red-50 border-red-200',
      textColor: 'text-red-800',
      icon: <Zap className="w-10 h-10 text-red-500" />
    }
  };

  // Default fallback if condition is not in our list
  return conditions[condition.toLowerCase()] || {
    title: `Potential ${condition} Detected`,
    description: `Our system has detected potential signs of ${condition}. This condition may require medical attention.`,
    recommendations: [
      'Consult with an ophthalmologist for proper diagnosis',
      'Bring a copy of this analysis to your appointment',
      'Don\'t delay seeking professional medical advice'
    ],
    bgColor: 'bg-gray-50 border-gray-200',
    textColor: 'text-gray-800',
    icon: <AlertTriangle className="w-10 h-10 text-gray-500" />
  };
};