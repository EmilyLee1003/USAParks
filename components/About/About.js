import React from "react";

function About() {
    return (
        <div>
            <section class="about-section text-center" id="about">
                <div class="">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <h2 class="text-white mb-4">Conservation of Wild Lands</h2>
                            <p class="text-white-50">
                                Wildlands provide benefits to our entire country and community.
                                They are not parks, but but rather public lands held in trust for
                                a specific purpose based on the mission of the program under which
                                they are managed. Land for us all to explore and enjoy together.
                                <a href="https://www.npca.org/articles/magazine"
                                    >Learn more about resources here 
                                </a>
                            </p>
                        </div>
                    </div>
                    <img
                        class="img-fluid"
                        src="assets/img/bg-arches.jpg"
                        alt="Arches National Park at night"
                    />
                </div>
		    </section>
        </div>
    )
};

export default About;