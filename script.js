// Contact Information - Update these with your actual details
        const contactInfo = {
            phone: '+919547029045', // Replace with actual phone number
            email: 'karmakarjyoti777@gmail.com', // Replace with actual email
            facebook: 'https://www.facebook.com/DARKBOYJYOTI/', // Replace with actual Facebook URL
            instagram: 'https://www.instagram.com/darkboyjyoti/', // Replace with actual Instagram URL
            website: 'https://darkboyjyoti.github.io', // Replace with actual website URL
            whatsapp: '+919547029045', // Replace with actual WhatsApp number
            telegram: 'https://t.me/DARKBOYJYOTI', // Replace with actual Telegram URL
            youtube: 'https://youtube.com/karmakarjyoti777', // Replace with actual YouTube URL
            linkedin: 'https://www.linkedin.com/in/jyoti-karmakar-42475b117/' // Replace with actual LinkedIn URL
        };

        // Interactive Particles System
        function createParticle(x, y) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            // Random direction and distance
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 50 + 20;
            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;
            
            particle.style.setProperty('--dx', dx + 'px');
            particle.style.setProperty('--dy', dy + 'px');
            
            // Add to container
            document.getElementById('particles').appendChild(particle);
            
            // Remove after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }



        // Function to make a phone call
        function makeCall() {
            if (isMobile()) {
                window.location.href = `tel:${contactInfo.phone}`;
            } else {
                // For desktop, show a popup with the phone number
                showContactPopup('Phone Call', `Call: ${contactInfo.phone}`, 
                    `To call this number, dial ${contactInfo.phone} from your phone.`);
            }
        }

        // Function to send email
        function sendEmail() {
            const subject = encodeURIComponent('Hello from your portfolio visitor');
            const body = encodeURIComponent('Hi Jyoti,\n\nI visited your portfolio and would like to connect with you.\n\nBest regards,');
            window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
        }

        // Function to open Facebook
        function openFacebook() {
            window.open(contactInfo.facebook, '_blank');
        }

        // Function to open Instagram
        function openInstagram() {
            window.open(contactInfo.instagram, '_blank');
        }

        // Function to open Website
        function openWebsite() {
            window.open(contactInfo.website, '_blank');
        }

        // Function to open WhatsApp
        function openWhatsApp() {
            const message = encodeURIComponent('Hi Jyoti! I found your portfolio and would like to connect with you.');
            if (isMobile()) {
                window.open(`whatsapp://send?phone=${contactInfo.whatsapp}&text=${message}`, '_blank');
            } else {
                window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
            }
        }

        // Function to open YouTube
        function openYouTube() {
            window.open(contactInfo.youtube, '_blank');
        }

        // Function to open LinkedIn
        function openLinkedIn() {
            window.open(contactInfo.linkedin, '_blank');
        }

        // Function to open Telegram
        function openTelegram() {
            window.open(contactInfo.telegram, '_blank');
        }

        // Check if device is mobile
        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        // Show contact popup for desktop
        function showContactPopup(title, contact, message) {
            const popup = document.createElement('div');
            popup.innerHTML = `
                <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 1000; display: flex; align-items: center; justify-content: center;">
                    <div style="background: white; padding: 30px; border-radius: 15px; max-width: 400px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
                        <h3 style="color: #2c3e50; margin-bottom: 15px;">${title}</h3>
                        <p style="color: #34495e; font-size: 18px; font-weight: bold; margin-bottom: 10px;">${contact}</p>
                        <p style="color: #7f8c8d; margin-bottom: 20px;">${message}</p>
                        <button onclick="this.parentElement.parentElement.remove()" style="background: linear-gradient(135deg, #3498db, #2c3e50); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 16px;">Close</button>
                    </div>
                </div>
            `;
            document.body.appendChild(popup);
        }

        // Add smooth scrolling and interactive effects
        document.addEventListener('DOMContentLoaded', () => {
            // Interactive Header Effects
            const header = document.querySelector('.header');
            const particles = document.getElementById('particles');
            let isMouseDown = false;

            // Set initial background gradient
            header.style.background = 'linear-gradient(135deg, #2c3e50, #3498db)';

            // Throttle function for better performance
            const throttle = (func, limit) => {
                let inThrottle;
                return function(...args) {
                    if (!inThrottle) {
                        func.apply(this, args);
                        inThrottle = true;
                        setTimeout(() => inThrottle = false, limit);
                    }
                }
            };

            // Mouse/Touch interaction for header
            let isInteracting = false;
            const handleInteraction = throttle((e) => {
                const rect = header.getBoundingClientRect();
                const x = (e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0)) - rect.left;
                const y = (e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0)) - rect.top;
                
                // Create one particle with optimized timing
                createParticle(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20);
                
                // Dynamic background gradient shift only when interacting
                if (isInteracting) {
                    const gradientX = (x / rect.width) * 100;
                    header.style.background = `linear-gradient(${gradientX}deg, #2c3e50, #3498db, #9b59b6)`;
                }
            }, 100);

            // Add event listeners for mouse and touch events
            const setupHeaderInteractions = () => {
                header.addEventListener('mousemove', handleInteraction);
                header.addEventListener('click', handleInteraction);

                header.addEventListener('touchstart', (e) => {
                    isMouseDown = true;
                    isInteracting = true;
                    handleInteraction(e);
                });

                header.addEventListener('touchmove', (e) => {
                    if (isMouseDown) {
                        e.preventDefault();
                        handleInteraction(e);
                    }
                });

                header.addEventListener('touchend', () => {
                    isMouseDown = false;
                    isInteracting = false;
                    // Reset to initial gradient
                    header.style.background = 'linear-gradient(135deg, #2c3e50, #3498db)';
                });

                // Mouse enter/leave events to control interaction state
                header.addEventListener('mouseenter', () => {
                    isInteracting = true;
                });

                header.addEventListener('mouseleave', () => {
                    isInteracting = false;
                    // Reset to initial gradient
                    header.style.background = 'linear-gradient(135deg, #2c3e50, #3498db)';
                });
            };

            setupHeaderInteractions();

            // Enhanced button animations with mobile support
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach((link, index) => {
                // Staggered entrance animation
                link.style.opacity = '0';
                link.style.transform = 'translateY(20px) scale(0.8)';
                
                setTimeout(() => {
                    link.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0) scale(1)';
                }, 200 + index * 100);

                // Desktop hover effects
                link.addEventListener('mouseenter', function() {
                    if (!isMobile()) {
                        this.style.transform = 'translateY(-3px) scale(1.08)';
                    }
                });

                link.addEventListener('mouseleave', function() {
                    if (!isMobile()) {
                        this.style.transform = 'translateY(0) scale(1)';
                    }
                });

                // Optimized mobile touch effects
                const handleTouchStart = function() {
                    if (isMobile()) {
                        this.style.transform = 'scale(0.95)';
                    }
                };

                const handleTouchEnd = function() {
                    if (isMobile()) {
                        setTimeout(() => {
                            this.style.transform = 'scale(1)';
                            this.blur();
                        }, 150);
                    }
                };

                link.addEventListener('touchstart', handleTouchStart);
                link.addEventListener('touchend', handleTouchEnd);
                link.addEventListener('click', handleTouchEnd);

                // Enhanced press effects for desktop
                link.addEventListener('mousedown', function() {
                    if (!isMobile()) {
                        this.style.transform = 'translateY(-1px) scale(0.95)';
                    }
                });
                
                link.addEventListener('mouseup', function() {
                    if (!isMobile()) {
                        setTimeout(() => {
                            this.style.transform = 'translateY(-3px) scale(1.08)';
                        }, 200);
                    }
                });

                // Single animation on load
                setTimeout(() => {
                    if (!link.matches(':hover')) {
                        link.style.animation = 'zoomPulse 1.5s ease-in-out';
                        setTimeout(() => {
                            link.style.animation = '';
                        }, 1500);
                    }
                }, index * 200);
            });

            // Skills with improved mobile interactions
            const skills = document.querySelectorAll('.skill');
            skills.forEach((skill, index) => {
                // Staggered entrance animation
                skill.style.opacity = '0';
                skill.style.transform = 'translateX(-20px) scale(0.7)';
                skill.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateX(0) scale(1)';
                }, 300 + index * 150);

                // Desktop hover effects
                skill.addEventListener('mouseenter', function() {
                    if (!isMobile()) {
                        this.style.transform = 'translateY(-2px)';
                    }
                });

                skill.addEventListener('mouseleave', function() {
                    if (!isMobile()) {
                        this.style.transform = 'scale(1)';
                    }
                });

                // Mobile touch effects with proper reset
                skill.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.95)';
                });

                skill.addEventListener('touchend', function() {
                    const self = this;
                    setTimeout(() => {
                        self.style.transform = 'scale(1)';
                        // Force reset any hover effects on mobile
                        if (isMobile()) {
                            self.style.filter = 'brightness(1)';
                            self.style.boxShadow = 'none';
                            self.blur(); // Remove focus
                        }
                    }, 150);
                });

                // Simple click animation for both desktop and mobile
                skill.addEventListener('click', function() {
                    this.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });

                // One-time entrance animation
                setTimeout(() => {
                    if (!skill.matches(':hover')) {
                        skill.style.animation = 'zoomPulse 1.8s ease-in-out';
                        setTimeout(() => {
                            skill.style.animation = '';
                        }, 1800);
                    }
                }, 300 + index * 150);
            });

            // Loading animation
            const portfolioCard = document.querySelector('.portfolio-card');
            portfolioCard.style.opacity = '0';
            portfolioCard.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                portfolioCard.style.transition = 'all 0.8s ease-out';
                portfolioCard.style.opacity = '1';
                portfolioCard.style.transform = 'translateY(0)';
            }, 100);
        });