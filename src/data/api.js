const API_URL = "http://localhost:4000/api"; 


const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return headers;
};


const handleResponse = async (res) => {
  if (!res.ok) {
    const errorText = await res.text();
    try {
      const errorJson = JSON.parse(errorText);
      throw new Error(errorJson.message || `Erreur API: ${res.status}`);
    } catch (e) {
      throw new Error(`Erreur API (${res.status}): ${errorText}`);
    }
  }
  return res.json();
};

// ============================================================
// AUTHENTIFICATION
// ============================================================

export const login = async (email, password) => {
  console.log("🔑 Tentative de login pour:", email);

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await handleResponse(res);
  

  if (data.token) {
    console.log("Token trouvé, sauvegarde en cours...");
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token);
      console.log("Token sauvegardé dans localStorage !");
    }
  } else {
    console.error("PAS DE TOKEN dans la réponse !");
  }

  return data;
};
export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

// ============================================================
// ANIMAUX
// ============================================================

export const getAnimals = async (page = 1, limit = 100) => {
  const res = await fetch(`${API_URL}/animaux?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(res);
};

export const getAnimalById = async (id) => {
  const res = await fetch(`${API_URL}/animaux/${id}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(res);
};

export const createAnimal = async (animalData) => {
  const res = await fetch(`${API_URL}/animaux`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(animalData),
  });
  return handleResponse(res);
};

export const updateAnimal = async (id, animalData) => {
  const res = await fetch(`${API_URL}/animaux/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(animalData),
  });
  return handleResponse(res);
};

export const deleteAnimal = async (id) => {
  const res = await fetch(`${API_URL}/animaux/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });
  return handleResponse(res);
};

// ============================================================
// VISITES & VACCINS
// ============================================================

export const getVisitsByAnimal = async (animalId) => {
  const res = await fetch(`${API_URL}/visites/animal/${animalId}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(res);
};

export const getVaccinesByAnimal = async (animalId) => {
  const res = await fetch(`${API_URL}/vaccins/animal/${animalId}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return handleResponse(res);
};