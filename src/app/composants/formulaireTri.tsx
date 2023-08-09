import React from 'react';

const FilterForm: React.FC = () => {
  return (
    <div className="content">
      <div id="filter">
        <div>
          <div className="text-style3">Catégories</div>
          <div className="zone-filtre">
            <div>
              <input type="checkbox" id="ch-all" />
              <label htmlFor="ch-all" className="text-style4">
                Tous
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-chocolat-blanc" />
              <label htmlFor="ch-chocolat-blanc" className="text-style4">
                Chocolat blanc
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-chocolat-lait" />
              <label htmlFor="ch-chocolat-lait" className="text-style4">
                Chocolat au lait
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-chocolat-noir" />
              <label htmlFor="ch-chocolat-noir" className="text-style4">
                Chocolat noir
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-noix" />
              <label htmlFor="ch-noix" className="text-style4">
                Noix/Noisette
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-fruit" />
              <label htmlFor="ch-fruit" className="text-style4">
                Fruit
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-caramel" />
              <label htmlFor="ch-caramel" className="text-style4">
                Caramel
              </label>
            </div>
            <div>
              <input type="checkbox" id="ch-liqueur" />
              <label htmlFor="ch-liqueur" className="text-style4">
                Liqueur
              </label>
            </div>
          </div>
        </div>
        <div>
          <div className="text-style3">Prix</div>
          <div className="zone-filtre">
            <div>
              <span className="text-style4">Prix min</span>
              <input type="number" id="prix-min" />
            </div>
            <div>
              <span className="text-style4">Prix max</span>
              <input type="number" id="prix-max" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-style3">Notes</div>
          <div className="zone-filtre">
            <div>
              <span className="text-style4">Note min</span>
              <select>
                <option value="1">1</option>
              </select>
            </div>
            <div>
              <span className="text-style4">Note max</span>
              <select>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
