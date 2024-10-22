class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header-desktop">
                <div class="frame47">
                    <div class="frame">
                        <a href="index.html">
                            <img src="images/Group.png" alt="Group Image">
                        </a>                        <p class="logo-text">Pets for Best</p>
                    </div>
                    <ul class="navlist">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="category.html">Category</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <div class="burger-menu">
                        <i class="bx bx-menu"></i>
                    </div>
                </div>

                <div class="frame46">
                    <a href="login.html" class="join">Join the community</a>
                    <div class="frame44">
                        <img src="">
                        <p>GEO</p>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </div>
            </header>

            <div class="modal" id="menuModal">
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <ul class="navlist">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="category.html">Category</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <div class="frame46">
                        <a href="login.html" class="join">Join the community</a>
                        <div class="frame44">
                            <img src="">
                            <p>GEO</p>
                            <i class='bx bx-chevron-down'></i>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.querySelector('.burger-menu').addEventListener('click', () => {
            document.getElementById('menuModal').style.display = 'block';
        });

        this.querySelector('.close-button').addEventListener('click', () => {
            document.getElementById('menuModal').style.display = 'none';
        });
    }
}

customElements.define('main-header', MainHeader);

class MainFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
            <footer class="footer">
                <div class="frame23">
                    <p>Register Now So You Don't Miss Our Programs</p>
                    <div class="email">
                        <input type="text" placeholder="Enter your Email" class="subtext">
                        <button class = 'subscribe'>Subscribe Now</button>
                    </div>
                </div>
                <div class="frame27">
                    <ul class="navlistforfoot">
                        <li><a href="">Home</a></li>
                        <li><a href="">Category</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul class="social">
                        <li><i class='bx bxl-facebook-circle'></i></li>
                        <li><i class='bx bxl-twitter' ></i></li>
                        <li><i class='bx bxl-instagram' ></i></li>
                        <li><i class='bx bxl-youtube' ></i></li>
                    </ul>
                </div>
                <div class="line"></div>
                <div class="frame26">
                    <p>&copy; 2022 Monito. All rights resered.</p>
                    <div class="frame">
                        <img src="images/Group.png">
                        <p class="logo-text">Pets for Best</p>
                    </div>
                    <div class="service">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('main-footer', MainFooter);
