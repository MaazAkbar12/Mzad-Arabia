import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import './PostAd.css';

// Only these categories represent physical products where condition and warranty make sense
const PRODUCT_CATEGORIES = [
  'Car Showrooms',
  'Car Sell',
  'Motorcycle',
  'Air Conditioner',
  'Spare Parts',
  'Electronics',
  'Mobile',
  'Home Appliance',
  'Cameras',
  'Electronic Game',
  'Furnitures'
];

const PostAd = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || 'en';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('mada');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState(''); // Localized inline error state

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    location: 'Riyadh',
    condition: 'New', 
    warranty: 'No',
    isNegotiable: false,
    subCategory: '',
    phone: '',
    whatsapp: '',
    mediaFile: null,
    mediaType: '',
    mediaPreviewUrl: ''
  });

  // Keep categories data structure clean
  const categories = [
    { id: '1', label: 'Commercial Properties for Rent', icon: '🏢', subCats: ['Admin & Com Villas', 'Workers House', 'Building & Towers', 'Commercial Shops', 'Work Office', 'Stores'] },
    { id: '2', label: 'Commercial Properties for Sale', icon: '🏗️', subCats: ['Admin & Com Villas', 'Workers House', 'Building & Towers', 'Commercial Shops', 'Work Office', 'Stores'] },
    { id: '3', label: 'Residential Properties for Sale', icon: '🔑', subCats: ['Building & Towers', 'Villas', 'Apartments', 'Other Property', 'Traditional Houses'] },
    { id: '4', label: 'Residential Properties for Rent', icon: '🏠', subCats: ['Building & Towers', 'Villas', 'Apartments', 'Other Property', 'Traditional Houses'] },
    { id: '5', label: 'Lands', icon: '🏔️', subCats: ['Residential Land', 'Commercial Land', 'Industrial Land', 'Other Land', 'Agricultural Land'] },
    { id: '6', label: 'Car Showrooms', icon: '🏬', subCats: ['New Cars', 'Used Cars', 'Luxury Showrooms', 'Certified Pre-Owned', 'VIP Showrooms', 'Premium Showrooms', 'Budget Showrooms', 'Commercial Showrooms', 'Imported Cars', 'EV Showrooms', 'Official Agencies'] },
    { id: '7', label: 'Car Sell', icon: '🚗', subCats: ['Toyota','Nissan','Chevrolet','Mitsubishi','GMC','Lexus','Mercedes','BMW','Ford','Kia', 'Land Rover', 'Honda', 'JETOUR', 'Hyundai', 'Jeep', 'Suzuki', 'Volkswagen', 'Dodge', 'Porsche', 'Xiaomi', 'MG', 'Cadillac', 'Audi', 'BYD', 'Infiniti', 'Alpine', 'Renault', 'MINI', 'CHERY', 'Lucid', 'Mazda', 'Geely', 'Isuzu', 'GAC', 'Acura', 'Changan', 'Lynk & Co', 'Afeela', 'Maxus', 'Hummer', 'Subaru', 'Peugeot', 'Jaguar', 'Volvo', 'KTM', 'McLaren', 'Lada', 'Lancia', 'Leapmotor', 'LYKAN', 'Morgan', 'Zeekr', 'Bentley', 'Fiat', 'Classic cars', 'Lotus', 'Great Wall', 'Foton', 'Datsun', 'Ashok', 'Borgward', 'Vanderhall', 'BAIC', 'Genesis', 'Maybach', 'Tesla', 'Changan Auto', 'CMC', 'AERO', 'Bestune', 'Dongfeng', 'Exeed', 'Factory Five', 'Fisker', 'Force', 'Forthing', 'DFSK', 'HAVAL', 'Hino', 'Hongqi', 'International', 'Jinbei', 'JMC', 'Ligier', 'Mahindra', 'Mercury', 'Omoda', 'Saab', 'SAIC Maxus', 'Triumph', 'Panoz', 'Plymouth', 'Polaris', 'Polestar', 'Radical', 'Rariro', 'Rivian', 'Scania', 'Saturn', 'Studebaker', 'NIO', 'Wuling', 'YoYo', 'Abarth', 'Skoda', 'Daihatsu', 'Seat', 'Citroen', 'TATA', 'SsangYong', 'Ferrari', 'Rolls Royce', 'Aston Martin', 'Bugatti', 'Alfa Romeo', 'Pontiac', 'Buick', 'JAC', 'King Long', 'Lamborghini', 'Lincoln', 'Maserati', 'Smart', 'Proton', 'AK', 'Ariel', 'Opel', 'Austin Healey', 'Dallara', 'Domy', 'FUSO', 'Haima', 'Higer', 'Imperial', 'Ineos', 'Iveco', 'ZXauto', 'Jensen', 'Koenigsegg', 'TVR', 'Daewoo', 'Wiesmann', 'Yamaha', 'Zimmer', 'Zotye', 'Avatr', 'Kaiyi', 'Cupra', 'Tank', 'VinFast', 'Pagani', 'Other Cars'] },
    { id: '8', label: 'Motorcycle', icon: '🏍️', subCats: ['Buggy', 'Polaris', 'BMW', 'TGB', 'Suzuki', 'Kawasaki', 'Harley Davidson', 'Honda', 'Yamaha', 'KTM', 'Ducati', 'Can-Am', 'Arctic Cat', 'Big Bear Choppers', 'MV Agusta', 'Aprilia', 'Bajaj', 'Beta', 'Gilera', 'Hisun', 'Piaggio', 'Pitster Pro', 'Royal Enfield', 'Triumph', 'TVS', 'Vespa', 'CFMOTO', 'Indian Motorcycle', 'Husqvarna', 'Benelli', 'SYM', 'Zontes', 'Voge', 'Others'] },
    { id: '9', label: 'Car Rental', icon: '🚙', subCats: ['Toyota', 'Nissan', 'Chevrolet', 'Mitsubishi', 'GMC', 'Lexus', 'Mercedes', 'BMW', 'Ford', 'Kia', 'Land Rover', 'Honda', 'JETOUR', 'Hyundai', 'Jeep', 'Suzuki', 'Volkswagen', 'Dodge', 'Porsche', 'Xiaomi', 'MG', 'Cadillac', 'Audi', 'BYD', 'Infiniti', 'Alpine', 'Renault', 'MINI', 'CHERY', 'Lucid', 'Mazda', 'Geely', 'Isuzu', 'GAC', 'Acura', 'Changan', 'Lynk & Co', 'Afeela', 'Maxus', 'Hummer', 'Faraday Future', 'Subaru', 'Peugeot', 'Rox Motor', 'Jaguar', 'Chrysler', 'Volvo', 'Bentley', 'Fiat', 'Classic cars', 'Lotus', 'Great Wall', 'Foton', 'Datsun', 'Ashok', 'Borgward', 'Vanderhall', 'BAIC', 'Genesis', 'Maybach', 'Tesla', 'Changan Auto', 'CMC', 'AERO', 'Bestune', 'Dongfeng', 'Exeed', 'Factory Five', 'Fisker', 'Force', 'Forthing', 'DFSK', 'HAVAL', 'Hino', 'Hongqi', 'International', 'Jinbei', 'JMC', 'Ligier', 'Mahindra', 'Mercury', 'Omoda', 'Saab', 'SAIC Maxus', 'Triumph', 'Wuling', 'YoYo', 'Abarth', 'Skoda', 'Daihatsu', 'Seat', 'Citroen', 'TATA', 'SsangYong', 'Ferrari', 'Rolls Royce', 'Aston Martin', 'Bugatti', 'Alfa Romeo', 'Pontiac', 'Buick', 'JAC', 'King Long', 'Lamborghini', 'Lincoln', 'Maserati', 'Smart', 'Proton', 'AK', 'Ariel', 'Opel', 'Austin Healey', 'Dallara', 'Domy', 'FUSO', 'Haima', 'Higer', 'Imperial', 'Ineos', 'Iveco', 'ZXauto', 'Jensen', 'Koenigsegg', 'KTM', 'McLaren', 'Lada', 'Lancia', 'Leapmotor', 'LYKAN', 'MACK', 'Mitsuoka', 'Morgan', 'Noble Automotive', 'Panoz', 'Plymouth', 'Polaris', 'Polestar', 'Radical', 'Rariro', 'Rivian', 'Scania', 'Saturn', 'Studebaker', 'TVR', 'Daewoo', 'Wiesmann', 'Yamaha', 'Zimmer', 'Zotye', 'Avatr', 'Kaiyi', 'Cupra', 'Tank', 'Zeekr', 'NIO', 'VinFast', 'Pagani', 'Other Cars'] },
    { id: '10', label: 'Car Services', icon: '🛠️', subCats: ['Towing', 'Mechanical Service', 'Electrical Service', 'Inspection / Fahs', 'AC Car Service', 'Battery Service', 'Tyres Service', 'Upholstery and Trim', 'Painting and Bodywork', 'Tinting', 'Car Wash and Detailing', 'Motorcycle Service', 'EV Charger Service', 'Clearance', 'Vehicle Transport and Export', 'Other Vehicle Services'] },
    { id: '11', label: 'Air Conditioner', icon: '❄️', subCats: ['ORYX', 'Sharp', 'Panasonic', 'Carrier', 'Midea', 'Hitachi', 'Mitsubishi Electric', 'IQAir', 'Daewoo', 'Samsung', 'Gree', 'LG', 'General', 'Other'] },
    { id: '12', label: 'Clean Services', icon: '🧹', subCats: ['Houses Cleaning', 'Carpets & Furnishings Cleaning', 'Water Tanks Cleaning', 'Swimming Pools Cleaning', 'Interfaces Cleaning', 'Finishing Waste Cleaning'] },
    { id: '13', label: 'Occasions', icon: '🎉', subCats: ['Sofas & Chairs', 'Photography & Display', 'Lighting & Laser', 'Decorations', 'Hospitality SRV', 'Halls & Tents', 'Others'] },
    { id: '14', label: 'Constructions', icon: '🏗️', subCats: ['Building Tools', 'Marble & Stone', 'Engineering & Design', 'Building Materials', 'Building & Construction'] },
    { id: '15', label: 'Furniture Moving', icon: '📦', subCats: ['Move Outside Arabia', 'Move Inside Arabia', 'Other'] },
    { id: '16', label: 'Transport Services', icon: '🚛', subCats: ['Companies Transport', 'Women\'s Taxi', 'Students Transport', 'Individual Transport'] },
    { id: '17', label: 'Spare Parts', icon: '⚙️', subCats: ['Brakes', 'Cooling System', 'Batteries & Accessories', 'Transmission & Gearing', 'Oils and Fluids', 'Cables', 'Glasses and Mirrors', 'Interior & Accessories', 'Filters', 'Tyres', 'Electric Vehicle Parts', 'Exterior & Spares', 'Lighting', 'Rims', 'Engines', 'Workshops', 'Other Parts'] },
    { id: '18', label: 'Decor and Interior Design', icon: '🖼️', subCats: ['Home Decor', 'Entrance Decor', 'Outdoor Decor', 'Wallpapers', 'Gypsum', 'Curtains', 'Others'] },
    { id: '19', label: 'Education', icon: '📚', subCats: ['Physics', 'Computer', 'Science', 'Chemistry', 'Islamic Studies', 'University Study', 'Mathematics', 'English Language', 'Arabic Language', 'Other Languages', 'Other Education'] },
    { id: '20', label: 'Selling Project', icon: '📊', subCats: ['Agriculture', 'Restaurants & Cafes', 'Industry', 'Services', 'Animal Husbandry', 'Laundry Shops', 'Gyms', 'Websites & Mobile Apps', 'Jewelry Shops', 'Studios', 'Salon & Spa', 'Bakery & Kitchens', 'Retail Stores', 'Tailor', 'Hospitality', 'Other Projects'] },
    { id: '21', label: 'Business Services', icon: '📈', subCats: ['Translation Services', 'Clearing Services', 'Companies Services', 'PRO Services', 'Accounting', 'Company Formation', 'Other Services'] },
    { id: '22', label: 'Maintenance Services', icon: '🔧', subCats: ['Appliance Repairs', 'Door & Window Maintenance', 'Handyman Services', 'Sanitation', 'Aluminum Works', 'Blacksmith Works', 'Plumbing Services', 'Electrical Services', 'Carpentry', 'Painting Works', 'Others'] },
    { id: '23', label: 'Electronics', icon: '💻', subCats: ['Computers', 'Laptops', 'Printers & Ink', 'Computer Accessories', 'Laser', 'GPS Devices', 'Drones', 'Other Electronics', 'Smart Home Devices', 'Power Banks', 'Networking', 'External Storage', 'Projectors'] },
    { id: '24', label: 'Mobile', icon: '📱', subCats: ['iPhone', 'Samsung', 'Realme', 'Xiaomi', 'Huawei', 'iPad', 'Android Tablets', 'Other Android Mobiles', 'Headphones', 'Smart Watches & Bands', 'Google Pixel', 'Nothing Phone', 'OnePlus', 'Others'] },
    { id: '25', label: 'Home Appliance', icon: '📺', subCats: ['Dishwashers & Dryers', 'Ranges, Ovens & Microwaves', 'Refrigerators & Freezers', 'Kitchen Appliances', 'Water Dispensers & Coolers', 'Vacuum Cleaners', 'Water Heaters', 'Washing Machines & Dryers', 'Parts & Accessories', 'Televisions, Satellite & Accessories', 'Air Fryers', 'Other Appliances'] },
    { id: '26', label: 'Job Vacancies', icon: '💼', subCats: ['Spa & Saloon', 'Sales & Retail', 'Media & Journalism', 'Customer Service', 'Hospitality', 'Logistics', 'Guards & Security', 'Education & Training', 'Human Resources', 'Industrial Manufacturing', 'Technicians & Workers', 'Nanny', 'Legal', 'Drivers & Delivery', 'Healthcare & Nursing', 'Design & Art', 'Administration', 'IT & Technology', 'Marketing & PR', 'Engineering', 'Accounting & Finance', 'Other Business Jobs'] },
    { id: '27', label: 'Cameras', icon: '📷', subCats: ['Leica', 'FujiFilm', 'GoPro', 'Sony', 'Nikon', 'Canon', 'Security Cameras', 'Other Cameras'] },
    { id: '28', label: 'Electronic Game', icon: '🎮', subCats: ['Wii Devices', 'Wii Games', 'Xbox Devices', 'Xbox Games', 'PlayStation Devices', 'PlayStation Games', 'Nintendo Switch Devices', 'Nintendo Switch Games', 'PC Gaming', 'VR Gaming', 'Other Electronic Games'] },
    { id: '29', label: 'Job Seekers', icon: '📄', subCats: ['Spa & Saloon', 'Industrial Manufacturing', 'Human Resources', 'Education & Training', 'Guards & Security', 'Legal', 'Nanny', 'Logistics', 'IT & Technology', 'Healthcare & Nursing', 'Design & Art', 'Drivers & Delivery', 'Engineering', 'Technicians & Workers', 'Hospitality', 'Accounting & Finance', 'Administration', 'Customer Service', 'Media & Journalism', 'Marketing & PR', 'Sales & Retail', 'Other Business Jobs'] },
    { id: '30', label: 'Freelancer', icon: '🤝', subCats: ['On-Site', 'Graphics & Design', 'Digital Marketing', 'Writing & Translation', 'Video & Animation', 'Music & Audio', 'Programming & Tech', 'Business', 'Lifestyle', 'Photography', 'Data & Analytics'] },
    { id: '31', label: 'Furnitures', icon: '🛋️', subCats: ['Sofas & Chairs', 'Bathroom Essentials', 'Kitchen & Tableware', 'Office Furniture', 'Outdoor Furniture', 'TV & Gaming Furniture', 'Crafts & Decor', 'Rugs, Mats & Flooring', 'Cabinets & Wardrobe', 'Tables', 'Lighting', 'Textiles', 'Rooms', 'Beds & Mattresses', 'Other Furniture'] },
    { id: '32', label: 'Others / Miscellaneous', icon: '➕', subCats: ['General Items', 'Scrap Materials', 'Lost & Found'] }
  ];

  // Check if selected category is an actual product type
  const isProductCategory = () => {
    return PRODUCT_CATEGORIES.includes(selectedCategory);
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.startsWith('video/') ? 'video' : 'image';

    setFormData({
      ...formData,
      mediaFile: file,
      mediaType: fileType,
      mediaPreviewUrl: URL.createObjectURL(file)
    });
  };

  const handleNext = () => {
    // Clear any previous error before validation running
    setValidationError('');

    if (currentStep === 1) {
      if (!selectedCategory || !formData.subCategory) {
        setValidationError(t('alertStep1', '⚠️ Please choose both a Category and its Sub-category before continuing.'));
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.title || !formData.price || !formData.description) {
        setValidationError(t('alertStep2', '⚠️ Please fill out the Title, Price, and Description fields.'));
        return;
      }
    }
    if (currentStep === 3) {
      if (!formData.phone) {
        setValidationError(t('alertStep3', '⚠️ Contact Phone Number is mandatory to post an ad.'));
        return;
      }
      if (selectedPlan === 'free') {
        setIsSubmitted(true);
        return;
      }
    }

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    setValidationError(''); // clear error screen trace
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const currentCategoryObj = categories.find(c => c.label === selectedCategory);

  return (
    <div className={`form-container ${currentLang === 'ar' ? 'rtl-direction' : ''}`} style={{ direction: currentLang === 'ar' ? 'rtl' : 'ltr' }}>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 0' }}></div>

      <h1>{t('mainTitle', 'Post New Listing')}</h1>
      <p className="subtitle">{t('subtitle', 'Publish your asset or item across Saudi Arabia\'s leading classifieds')}</p>

      {/* STEPPER PIPELINE CONTAINER */}
      <div className="stepper">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'done' : ''}`}>
            <div className="step-circle">{currentStep > step ? t('stepDone', '✓') : step}</div>
            <div className="step-label">
              {step === 1 && t('step1', 'Category')}
              {step === 2 && t('step2', 'Specs & Details')}
              {step === 3 && t('step3', 'Media & Tier')}
              {step === 4 && t('step4', 'Checkout')}
            </div>
          </div>
        ))}
      </div>

      {!isSubmitted ? (
        <div className="form-card">
          
          {/* STEP 1: CATEGORY SELECTION PANEL */}
          {currentStep === 1 && (
            <div className="panel">
              <h2>{t('catHeader', 'Select Category & Niche')}</h2>
              <div className="category-grid" style={{ maxHeight: '350px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px', marginBottom: '20px' }}>
                {categories.map((cat) => (
                  <div key={cat.id} className={`category-item ${selectedCategory === cat.label ? 'selected' : ''}`} onClick={() => { setSelectedCategory(cat.label); setFormData({...formData, subCategory: ''}); setValidationError(''); }}>
                    <span className="category-icon">{cat.icon}</span>
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{t(`categories.${cat.id}`, cat.label)}</span>
                  </div>
                ))}
              </div>
              <div className="form-field">
                <label>{t('subCatLabel', 'Sub-category')} <span className="required">*</span></label>
                <select value={formData.subCategory} onChange={(e) => { setFormData({...formData, subCategory: e.target.value}); setValidationError(''); }} disabled={!selectedCategory}>
                  {!selectedCategory ? <option>{t('subCatDisabled', 'Choose main category first')}</option> : (
                    <>
                      <option value="">{t('subCatDefault', '-- Select Variant Sub-Category --')}</option>
                      {currentCategoryObj?.subCats.map(sc => (
                        <option key={sc} value={sc}>{t(`subCategories.${sc}`, sc)}</option>
                      ))}
                    </>
                  )}
                </select>
              </div>
            </div>
          )}

          {/* STEP 2: DETAILS PANEL */}
          {currentStep === 2 && (
            <div className="panel">
              <h2>{t('specsHeader', 'Product Specifications & Details')}</h2>
              <div className="form-field">
                <label>{t('adTitleLabel', 'Ad Title')} <span className="required">*</span></label>
                <input type="text" placeholder={t('adTitlePlaceholder', 'e.g. iPhone 15 Pro Max 256GB Titanium')} value={formData.title} onChange={(e) => { setFormData({...formData, title: e.target.value}); setValidationError(''); }} />
              </div>

              {/* DYNAMIC FIELD ROW: Only visible if the selected category is an actual product */}
              {isProductCategory() && (
                <div className="form-row">
                  <div className="form-field">
                    <label>{t('conditionLabel', 'Product Condition')}</label>
                    <select value={formData.condition} onChange={(e) => setFormData({...formData, condition: e.target.value})}>
                      <option value="New">{t('condNew', '✨ Brand New')}</option>
                      <option value="Used - Like New">{t('condLikeNew', '👍 Used - Like New')}</option>
                      <option value="Used - Fair">{t('condFair', '🚲 Used - Fair Condition')}</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>{t('warrantyLabel', 'Warranty Available?')}</label>
                    <select value={formData.warranty} onChange={(e) => setFormData({...formData, warranty: e.target.value})}>
                      <option value="No">{t('warrantyNo', 'No Warranty')}</option>
                      <option value="Yes">{t('warrantyYes', 'Yes Available')}</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="form-row">
                <div className="form-field">
                  <label>{t('priceLabel', 'Price (SAR)')} <span className="required">*</span></label>
                  <input type="number" placeholder={t('pricePlaceholder', 'SAR 0.00')} value={formData.price} onChange={(e) => { setFormData({...formData, price: e.target.value}); setValidationError(''); }} />
                </div>
                <div className="form-field">
                  <label>{t('locationLabel', 'Location (Saudi Arabia)')}</label>
                  <select value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}>
                    <option value="Riyadh">{t('locRiyadh', 'Riyadh')}</option>
                    <option value="Jeddah">{t('locJeddah', 'Jeddah')}</option>
                    <option value="Dammam">{t('locDammam', 'Dammam')}</option>
                    <option value="Mecca">{t('locMecca', 'Mecca')}</option>
                    <option value="Medina">{t('locMedina', 'Medina')}</option>
                  </select>
                </div>
              </div>

              <div className="form-field" style={{ flexDirection: 'row', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
                <input type="checkbox" id="negotiable" checked={formData.isNegotiable} onChange={(e) => setFormData({...formData, isNegotiable: e.target.checked})} style={{ width: 'auto' }} />
                <label htmlFor="negotiable" style={{ marginBottom: 0, cursor: 'pointer' }}>{t('negotiableLabel', 'Price is slightly negotiable')}</label>
              </div>

              <div className="form-field" style={{ marginTop: '15px' }}>
                <label>{t('descLabel', 'Detailed Description')} <span className="required">*</span></label>
                <textarea placeholder={t('descPlaceholder', 'Mention specifications...')} value={formData.description} onChange={(e) => { setFormData({...formData, description: e.target.value}); setValidationError(''); }}></textarea>
              </div>
            </div>
          )}

          {/* STEP 3: MEDIA PANEL */}
          {currentStep === 3 && (
            <div className="panel">
              <h2>{t('mediaHeader', 'Media Upload & Contacts')}</h2>
              
              <div className="form-field">
                <label>{t('uploadLabel', 'Upload Product Asset')} <span className="hint">{t('uploadHint', '(Supports Image or Video File)')}</span></label>
                <div className="file-upload-box" style={{ border: '2px dashed #cbd5e1', padding: '20px', borderRadius: '8px', textAlign: 'center', background: '#f8fafc' }}>
                  <input type="file" accept="image/*,video/*" onChange={handleMediaChange} style={{ cursor: 'pointer' }} />
                  <p style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>{t('uploadFormats', 'Supported formats: JPG, PNG, WEBP, MP4, MOV')}</p>

                  {formData.mediaPreviewUrl && (
                    <div style={{ marginTop: '15px', borderTop: '1px dashed #cbd5e1', paddingTop: '15px' }}>
                      <p style={{ fontSize: '11px', color: '#0284c7', fontWeight: 'bold', marginBottom: '8px' }}>{t('livePreview', 'Live Asset Preview:')}</p>
                      {formData.mediaType === 'image' ? (
                        <img src={formData.mediaPreviewUrl} alt="Visual Feed Preview" style={{ maxWidth: '100%', maxHeight: '180px', borderRadius: '6px', objectFit: 'contain' }} />
                      ) : (
                        <video src={formData.mediaPreviewUrl} controls muted style={{ maxWidth: '100%', maxHeight: '180px', borderRadius: '6px' }} />
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row" style={{ marginTop: '15px' }}>
                <div className="form-field">
                  <label>{t('phoneLabel', 'Contact Phone Number')} <span className="required">*</span></label>
                  <input type="tel" placeholder="+966 5xxxxxxx" value={formData.phone} onChange={(e) => { setFormData({...formData, phone: e.target.value}); setValidationError(''); }} />
                </div>
                <div className="form-field">
                  <label>{t('whatsappLabel', 'WhatsApp Number')} <span className="optional">{t('optionalHint', '(Optional)')}</span></label>
                  <input type="tel" placeholder="+966 5xxxxxxx" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
                </div>
              </div>

              <h3 style={{ marginTop: '25px', marginBottom: '10px' }}>{t('promoHeader', 'Select Promotion Level')}</h3>
              <div className="plan-selection">
                <div className={`plan-card ${selectedPlan === 'free' ? 'selected' : ''}`} onClick={() => setSelectedPlan('free')}>
                  <div className="plan-header"><span className="plan-name">{t('planFreeTitle', 'Standard Free Tier')}</span><span className="plan-price">{t('planFreePrice', 'SAR 0')}</span></div>
                  <ul className="plan-features"><li>{t('planFreeFeat1', 'Standard search rendering')}</li><li>{t('planFreeFeat2', 'Active for 14 Days')}</li></ul>
                  <div className="radio-check"></div>
                </div>
                <div className={`plan-card premium ${selectedPlan === 'premium' ? 'selected' : ''}`} onClick={() => setSelectedPlan('premium')}>
                  <div className="plan-header"><span className="plan-name">{t('planPremiumTitle', 'Premium Haraj Pin')}</span><span className="plan-price">{t('planPremiumPrice', 'SAR 50')}</span></div>
                  <ul className="plan-features"><li>{t('planPremiumFeat1', 'Pinned at top')}</li><li>{t('planPremiumFeat2', 'WhatsApp triggers')}</li><li>{t('planPremiumFeat3', 'Unlimited log logs')}</li></ul>
                  <div className="radio-check"></div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: KSA CHECKOUT */}
          {currentStep === 4 && (
            <div className="panel">
              <h2>{t('checkoutHeader', 'Secure Saudi Gateway System')}</h2>
              <p className="hint">{t('checkoutHint', 'Choose your transaction system localized for KSA')}</p>
              
              <div className="payment-tabs" style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {['mada', 'stcpay', 'applepay', 'paypal'].map((method) => (
                  <button key={method} type="button" className={`pay-tab ${selectedPaymentMethod === method ? 'active-tab' : ''}`} onClick={() => setSelectedPaymentMethod(method)} style={{ flex: '1 1 20%', minWidth: '90px', padding: '12px 6px', borderRadius: '8px', border: selectedPaymentMethod === method ? '2px solid #0284c7' : '1px solid #cbd5e1', background: selectedPaymentMethod === method ? '#f0f9ff' : '#fff', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', fontSize: '12px' }}>
                    {method === 'mada' && `💳 Mada`}
                    {method === 'stcpay' && `📱 STC Pay`}
                    {method === 'applepay' && `🍏 Apple`}
                    {method === 'paypal' && `🅿️ PayPal`}
                  </button>
                ))}
              </div>

              <div className="payment-form" style={{ padding: '15px', border: '1px solid #e2e8f0', borderRadius: '10px', background: '#ffffff' }}>
                {selectedPaymentMethod === 'mada' && (
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{t('madaTitle', 'Mada National Debit Network')}</h4>
                    <div className="form-field"><label>{t('cardholderLabel', 'Cardholder Name')}</label><input type="text" placeholder={t('cardholderPlaceholder', 'Mohammed Al-Fahad')} /></div>
                    <div className="form-field"><label>{t('cardNumberLabel', 'Card Number')}</label><input type="text" placeholder={t('cardNumberPlaceholder', '4442 xxxx xxxx xxxx')} /></div>
                  </div>
                )}
                {selectedPaymentMethod === 'stcpay' && (
                  <div>
                    <h4 style={{ margin: '0 0 10px 0', color: '#1e293b' }}>{t('stcTitle', 'STC Pay Virtual Wallet')}</h4>
                    <div className="form-field"><label>{t('stcPhoneLabel', 'Registered Mobile Number')}</label><input type="tel" placeholder="+966 5xxxxxxxx" /></div>
                    <p style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>{t('stcHint', 'Instant execution request via app.')}</p>
                  </div>
                )}
                {selectedPaymentMethod === 'applepay' && (
                  <div style={{ textAlign: 'center', padding: '15px 0' }}>
                    <div style={{ background: '#000', color: '#fff', padding: '14px', borderRadius: '8px', display: 'inline-block', width: '90%', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>{t('applePayBtn', ' Pay with Apple Pay')}</div>
                  </div>
                )}
                {selectedPaymentMethod === 'paypal' && (
                  <div style={{ textAlign: 'center', padding: '15px 0' }}>
                    <div style={{ background: '#ffc439', color: '#003087', padding: '14px', borderRadius: '8px', display: 'inline-block', width: '90%', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px' }}>{t('paypalBtn', 'PayPal Secure Checkout')}</div>
                  </div>
                )}

                <div className="summary-box" style={{ marginTop: '20px', background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}><span>{t('feeSummary', 'Premium Feature Fee')}</span><span>SAR 50.00</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderTop: '1px solid #e2e8f0', paddingTop: '8px', color: '#0f172a', fontSize: '15px' }}><span>{t('totalSummary', 'Grand Total')}</span><span>SAR 50.00</span></div>
                </div>
              </div>
            </div>
          )}

          {/* RED INLINE VALIDATION ERROR MESSAGING VIEW LAYER */}
          {validationError && (
            <div className="error-message-box" style={{ background: '#fef2f2', border: '1px solid #fee2e2', padding: '12px 16px', borderRadius: '8px', color: '#dc2626', fontWeight: '600', fontSize: '13px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {validationError}
            </div>
          )}

          {/* BOTTOM FORM CONTROLS */}
          <div className="form-actions" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
            <button className="btn-back" onClick={handleBack} disabled={currentStep === 1}>{t('btnBack', 'Back')}</button>
            <button className="btn-next" onClick={handleNext}>
              {currentStep === 3 && selectedPlan === 'free' ? t('btnPublish', 'Publish Ad') : currentStep === 4 ? t('btnPayment', 'Complete Payment') : t('btnNext', 'Next')}
            </button>
          </div>

        </div>
      ) : (
        /* SUCCESS PORTAL MAPPING FEEDBACK */
        <div className="form-card success-card" style={{ textAlign: 'center', padding: '40px 20px' }}>
          <div className="success-seal" style={{ fontSize: '55px', color: '#22c55e', marginBottom: '15px' }}>✓</div>
          <h2>{t('successHeader', 'Listing Uploaded Successfully!')}</h2>
          <p style={{ color: '#64748b', maxWidth: '400px', margin: '0 auto 20px auto' }}>{t('successDesc', 'Your ad will go live shortly.')}</p>
          <button className="btn-next" onClick={() => window.location.reload()}>{t('btnRestart', 'Post Another Ad')}</button>
        </div>
      )}
      <p className="disclaimer">{t('disclaimer', 'Saudi Regional Sandbox layer.')}</p>
    </div>
  );
};

export default PostAd;