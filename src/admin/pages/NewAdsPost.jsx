import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import './NewAdsPost.css'; // Iski CSS nichay majood hai

// Sirf in categories me Condition aur Warranty show hogi
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

const NewAdsPost = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language || 'en';

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

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

  const categories = [
    { id: '1', label: 'Commercial Properties for Rent', icon: '🏢', subCats: ['Admin & Com Villas', 'Workers House', 'Building & Towers', 'Commercial Shops', 'Work Office', 'Stores'] },
    { id: '2', label: 'Commercial Properties for Sale', icon: '🏗️', subCats: ['Admin & Com Villas', 'Workers House', 'Building & Towers', 'Commercial Shops', 'Work Office', 'Stores'] },
    { id: '3', label: 'Residential Properties for Sale', icon: '🔑', subCats: ['Building & Towers', 'Villas', 'Apartments', 'Other Property', 'Traditional Houses'] },
    { id: '4', label: 'Residential Properties for Rent', icon: '🏠', subCats: ['Building & Towers', 'Villas', 'Apartments', 'Other Property', 'Traditional Houses'] },
    { id: '5', label: 'Lands', icon: '🏔️', subCats: ['Residential Land', 'Commercial Land', 'Industrial Land', 'Other Land', 'Agricultural Land'] },
    { id: '6', label: 'Car Showrooms', icon: '🏬', subCats: ['New Cars', 'Used Cars', 'Luxury Showrooms', 'Certified Pre-Owned', 'VIP Showrooms'] },
    { id: '7', label: 'Car Sell', icon: '🚗', subCats: ['Toyota','Nissan','Chevrolet','Mitsubishi','GMC','Lexus','Mercedes','BMW','Ford','Kia', 'Hyundai'] },
    { id: '8', label: 'Motorcycle', icon: '🏍️', subCats: ['Buggy', 'Polaris', 'BMW', 'Suzuki', 'Kawasaki', 'Honda', 'Yamaha', 'KTM', 'Others'] },
    { id: '9', label: 'Car Rental', icon: '🚙', subCats: ['Toyota', 'Nissan', 'Chevrolet', 'Mitsubishi', 'GMC', 'Lexus', 'Mercedes', 'BMW'] },
    { id: '10', label: 'Car Services', icon: '🛠️', subCats: ['Towing', 'Mechanical Service', 'Electrical Service', 'Inspection', 'Other Vehicle Services'] },
    { id: '11', label: 'Air Conditioner', icon: '❄️', subCats: ['Sharp', 'Panasonic', 'Carrier', 'Midea', 'Samsung', 'Gree', 'LG', 'Other'] },
    { id: '12', label: 'Clean Services', icon: '🧹', subCats: ['Houses Cleaning', 'Carpets Cleaning', 'Water Tanks Cleaning', 'Others'] },
    { id: '13', label: 'Occasions', icon: '🎉', subCats: ['Sofas & Chairs', 'Photography', 'Lighting', 'Decorations', 'Others'] },
    { id: '14', label: 'Constructions', icon: '🏗️', subCats: ['Building Tools', 'Marble & Stone', 'Engineering', 'Materials'] },
    { id: '15', label: 'Furniture Moving', icon: '📦', subCats: ['Move Outside Arabia', 'Move Inside Arabia', 'Other'] },
    { id: '16', label: 'Transport Services', icon: '🚛', subCats: ['Companies Transport', 'Women\'s Taxi', 'Students Transport'] },
    { id: '17', label: 'Spare Parts', icon: '⚙️', subCats: ['Brakes', 'Cooling System', 'Batteries', 'Tyres', 'Engines', 'Other Parts'] },
    { id: '18', label: 'Decor and Interior Design', icon: '🖼️', subCats: ['Home Decor', 'Wallpapers', 'Gypsum', 'Curtains', 'Others'] },
    { id: '19', label: 'Education', icon: '📚', subCats: ['Physics', 'Computer', 'Science', 'Mathematics', 'English', 'Other Education'] },
    { id: '20', label: 'Selling Project', icon: '📊', subCats: ['Restaurants & Cafes', 'Industry', 'Services', 'Retail Stores', 'Others'] },
    { id: '21', label: 'Business Services', icon: '📈', subCats: ['Translation Services', 'Accounting', 'Company Formation', 'Other Services'] },
    { id: '22', label: 'Maintenance Services', icon: '🔧', subCats: ['Appliance Repairs', 'Plumbing Services', 'Electrical Services', 'Others'] },
    { id: '23', label: 'Electronics', icon: '💻', subCats: ['Computers', 'Laptops', 'Printers', 'Smart Home Devices', 'Other Electronics'] },
    { id: '24', label: 'Mobile', icon: '📱', subCats: ['iPhone', 'Samsung', 'Realme', 'Xiaomi', 'Huawei', 'iPad', 'Smart Watches'] },
    { id: '25', label: 'Home Appliance', icon: '📺', subCats: ['Refrigerators', 'Kitchen Appliances', 'Washing Machines', 'Televisions', 'Others'] },
    { id: '26', label: 'Job Vacancies', icon: '💼', subCats: ['Sales & Retail', 'Customer Service', 'Hospitality', 'Drivers', 'IT & Technology'] },
    { id: '27', label: 'Cameras', icon: '📷', subCats: ['Sony', 'Nikon', 'Canon', 'GoPro', 'Security Cameras', 'Other Cameras'] },
    { id: '28', label: 'Electronic Game', icon: '🎮', subCats: ['Xbox Devices', 'Xbox Games', 'PlayStation Devices', 'PlayStation Games', 'PC Gaming'] },
    { id: '29', label: 'Job Seekers', icon: '📄', subCats: ['Human Resources', 'Education', 'Drivers', 'Engineering', 'Technicians'] },
    { id: '30', label: 'Freelancer', icon: '🤝', subCats: ['Graphics & Design', 'Digital Marketing', 'Programming & Tech', 'Photography'] },
    { id: '31', label: 'Furnitures', icon: '🛋️', subCats: ['Sofas & Chairs', 'Office Furniture', 'Outdoor Furniture', 'Tables', 'Beds', 'Others'] },
    { id: '32', label: 'Others / Miscellaneous', icon: '➕', subCats: ['General Items', 'Scrap Materials', 'Lost & Found'] }
  ];

  const isProductCategory = () => PRODUCT_CATEGORIES.includes(selectedCategory);

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
    setValidationError('');

    if (currentStep === 1) {
      if (!selectedCategory || !formData.subCategory) {
        setValidationError(t('alertStep1', '⚠️ Please choose both a Category and its Sub-category.'));
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.title || !formData.price || !formData.description || !formData.phone) {
        setValidationError(t('alertStep2Admin', '⚠️ Title, Price, Description, and Contact Phone are mandatory.'));
        return;
      }
      // Admin directly submits here, no checkout required!
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    setValidationError('');
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const currentCategoryObj = categories.find(c => c.label === selectedCategory);

  return (
    <div className={`admin-form-container ${currentLang === 'ar' ? 'rtl-direction' : ''}`} style={{ direction: currentLang === 'ar' ? 'rtl' : 'ltr' }}>
      
      <h1>{t('adminPostTitle', 'Admin Portal: Management New Ad')}</h1>
      <p className="subtitle">{t('adminSubtitle', 'Instantly publish system-approved items on behalf of users or platform inventory.')}</p>

      {/* STEPPER PIPELINE */}
      <div className="stepper">
        {[1, 2].map((step) => (
          <div key={step} className={`step ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'done' : ''}`}>
            <div className="step-circle">{currentStep > step ? t('stepDone', '✓') : step}</div>
            <div className="step-label">
              {step === 1 && t('step1', 'Category Selection')}
              {step === 2 && t('step2AdminLabel', 'Ad Specifications & Media')}
            </div>
          </div>
        ))}
      </div>

      {!isSubmitted ? (
        <div className="form-card">
          
          {/* STEP 1: CATEGORY SELECTION */}
          {currentStep === 1 && (
            <div className="panel">
              <h2>{t('catHeader', 'Select Category & Niche')}</h2>
              <div className="category-grid" style={{ maxHeight: '320px', overflowY: 'auto', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px', marginBottom: '20px' }}>
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

          {/* STEP 2: DETAILS + MEDIA COMBINED */}
          {currentStep === 2 && (
            <div className="panel">
              <h2>{t('specsHeaderAdmin', 'Listing Content Information')}</h2>
              
              <div className="form-field">
                <label>{t('adTitleLabel', 'Ad Title')} <span className="required">*</span></label>
                <input type="text" placeholder={t('adTitlePlaceholder', 'e.g. Toyota Camry 2024 GLE')} value={formData.title} onChange={(e) => { setFormData({...formData, title: e.target.value}); setValidationError(''); }} />
              </div>

              {isProductCategory() && (
                <div className="form-row">
                  <div className="form-field">
                    <label>{t('conditionLabel', 'Product Condition')}</label>
                    <select value={formData.condition} onChange={(e) => setFormData({...formData, condition: e.target.value})}>
                      <option value="New">{t('condNew', '✨ Brand New')}</option>
                      <option value="Used - Like New">{t('condLikeNew', '👍 Used - Like New')}</option>
                      <option value="Used - Fair">{t('condFair', ' Used - Fair Condition')}</option>
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
                  <input type="number" placeholder="SAR 0.00" value={formData.price} onChange={(e) => { setFormData({...formData, price: e.target.value}); setValidationError(''); }} />
                </div>
                <div className="form-field">
                  <label>{t('locationLabel', 'Location (Saudi Arabia)')}</label>
                  <select value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})}>
                    <option value="Riyadh">Riyadh</option>
                    <option value="Jeddah">Jeddah</option>
                    <option value="Dammam">Dammam</option>
                    <option value="Mecca">Mecca</option>
                    <option value="Medina">Medina</option>
                  </select>
                </div>
              </div>

              <div className="form-field checkbox-row">
                <input type="checkbox" id="negotiable" checked={formData.isNegotiable} onChange={(e) => setFormData({...formData, isNegotiable: e.target.checked})} />
                <label htmlFor="negotiable">{t('negotiableLabel', 'Price is slightly negotiable')}</label>
              </div>

              <div className="form-field">
                <label>{t('descLabel', 'Detailed Description')} <span className="required">*</span></label>
                <textarea placeholder={t('descPlaceholder', 'Write clear details about the listing...')} value={formData.description} onChange={(e) => { setFormData({...formData, description: e.target.value}); setValidationError(''); }}></textarea>
              </div>

              {/* MEDIA FILE UPLOAD */}
              <div className="form-field" style={{ marginTop: '15px' }}>
                <label>{t('uploadLabel', 'Upload Product Asset')} <span className="hint">(Image/Video)</span></label>
                <div className="file-upload-box">
                  <input type="file" accept="image/*,video/*" onChange={handleMediaChange} />
                  {formData.mediaPreviewUrl && (
                    <div className="preview-container">
                      {formData.mediaType === 'image' ? (
                        <img src={formData.mediaPreviewUrl} alt="Preview" />
                      ) : (
                        <video src={formData.mediaPreviewUrl} controls muted />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* CONTACT DETAILS */}
              <div className="form-row" style={{ marginTop: '15px' }}>
                <div className="form-field">
                  <label>{t('phoneLabel', 'Contact Phone')} <span className="required">*</span></label>
                  <input type="tel" placeholder="+966 5xxxxxxx" value={formData.phone} onChange={(e) => { setFormData({...formData, phone: e.target.value}); setValidationError(''); }} />
                </div>
                <div className="form-field">
                  <label>{t('whatsappLabel', 'WhatsApp')} <span className="optional">(Optional)</span></label>
                  <input type="tel" placeholder="+966 5xxxxxxx" value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
                </div>
              </div>

            </div>
          )}

          {/* ERROR BOX */}
          {validationError && (
            <div className="error-message-box">
              {validationError}
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="form-actions">
            <button className="btn-back" onClick={handleBack} disabled={currentStep === 1}>{t('btnBack', 'Back')}</button>
            <button className="btn-next" onClick={handleNext}>
              {currentStep === 2 ? t('btnPublishAdmin', 'Publish Ad Instantly') : t('btnNext', 'Next')}
            </button>
          </div>

        </div>
      ) : (
        /* SUCCESS APP SHEET */
        <div className="form-card success-card">
          <div className="success-seal">✓</div>
          <h2>{t('successHeaderAdmin', 'System Database Updated!')}</h2>
          <p>{t('successDescAdmin', 'The ad has been forcefully pushed live under platform logs.')}</p>
          <button className="btn-next" onClick={() => window.location.reload()}>{t('btnRestart', 'Post Another Ad')}</button>
        </div>
      )}
    </div>
  );
};

export default NewAdsPost;